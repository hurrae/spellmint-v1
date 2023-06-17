import connectMongo from "../../../connect/DBconnect";
import Users from "../../../model/UserSchema";
import AppUsers from "../../../model/AppUserSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    console.log("i am in backend");
    console.log("req body: ", req.body);
    const { email } = req.body;

    try {
      const user = await Users.findOne({
        email,
      });
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }

      const appuser = await AppUsers.findOne({
        email,
      });
      if (!appuser) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ user, appuser });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(400).json({ message: "Invalid request" });
  }
}
