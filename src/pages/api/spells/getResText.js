import connectMongo from "../../../../connect/DBconnect";
import Spells from "../../../../model/SpellSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    const { share_code } = req.body;
    console.log("Share Code: ", share_code);

    try {
      // Find the spell by share_code and retrieve the res_text field
      const spell = await Spells.findOne({ share_code });

      if (!spell) {
        return res.status(404).json({ error: "Spell not found" });
      }

      const { res_text } = spell;

      res.status(200).json({ res_text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
