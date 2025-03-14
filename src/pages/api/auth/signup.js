import connectMongo from "../../../../connect/DBconnect";
import Participants from "../../../../model/AppUserSchema";
import Users from "../../../../model/UserSchema";
import { hash } from "bcryptjs";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  // only post method is accepted
  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });
    const { name, email, password } = req.body;

    // check duplicate users
    const checkexisting = await Users.findOne({ email });
    if (checkexisting)
      return res.status(422).json({ message: "User Already Exists...!" });

    // hash password
    let user = new Users({
      name,
      email,
      password: await hash(password, 12),
    });

    await user.save();

    // let participant = new Participants({
    //   name,
    //   email,
    // });

    // await participant.save();

    res.status(201).json(user);
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
