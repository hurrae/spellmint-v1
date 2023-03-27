const crypto = require("crypto");
import connectMongo from "../../../../connect/DBconnect";
import Users from "../../../../model/UserSchema";

export default async function handler(req, res) {
  const { method } = req;
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (method == "POST") {
    const { token } = req.query;
    console.log("toke: ", token);
    const hash = crypto.createHash("sha256").update(token).digest("hex");
    console.log("hash val: ", hash);

    let user = await Users.findOne({ resetPasswordToken: hash });
    if (!user) {
      res.status(404).json({ msg: "User not found" });
    }

    if (Date.now() > user.resetPasswordExpire) {
      console.log("Link has expired");
      return res.status(404).json({ message: "Link expired" });
    }

    res.status(200).json({ status: "OK", msg: "User found to reset" });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
