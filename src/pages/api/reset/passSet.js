import connectMongo from "../../../../connect/DBconnect";
import Users from "../../../../model/UserSchema";
import { hash } from "bcryptjs";
const crypto = require("crypto");

export default async function handler(req, res) {
  const { method } = req;
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (method == "POST") {
    const { token } = req.body;
    const hash2 = crypto.createHash("sha256").update(token).digest("hex");

    let user = await Users.findOne({ resetPasswordToken: hash2 });
    if (!user) {
      res.status(404).json({ msg: "User not found" });
    }

    // console.log("new Pass: ", req.body.newPass);
    user.password = await hash(req.body.newPass, 12);
    user.resetPasswordToken = null;
    user.resetPasswordExpire = null;
    user
      .save()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    res.status(200).json({ status: "OK", msg: "User new password set" });
  } else {
    res.status(200).json({ msg: "Not a Post request" });
  }
}
