import connectMongo from "../../../../connect/DBconnect";
import AppUsers from "../../../../model/AppUserSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    console.log("i am in backend");
    const { name, email } = req.body;

    // // check duplicate users
    const checkexisting = await AppUsers.findOne({ email: email });
    if (checkexisting) {
      console.log("jj", "double user spotted");
      return res.status(200).json({ message: "User Already Exists...!" });
    } else {
      try {
        let appuser = new AppUsers({
          name,
          email,
        });

        await appuser.save();
        res.status(200).json({ data: "i am okk" });
      } catch (err) {
        console.log(err, "i am create appuser in backend");
      }
    }
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
