import connectMongo from "../../../../connect/DBconnect";
import Spells from "../../../../model/SpellSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    console.log("i am in backend");
    console.log("req body: ", req.body);
    const { user_email, proj_name, spell_name } = req.body;

    if (user_email && spell_name && proj_name) {
      try {
        const spell = await Spells.findOne({
          user_email,
          proj_name,
          name: spell_name,
        });
        if (spell) {
          res.status(200).json({ data: spell });
        } else {
          res.status(404).json({ message: "Spell not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    } else {
      res.status(400).json({ message: "Invalid request" });
    }
  }
}
