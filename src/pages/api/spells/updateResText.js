import connectMongo from "../../../../connect/DBconnect";
import Spells from "../../../../model/SpellSchema";
export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    const { spellId, res_text } = req.body;

    try {
      const spell = await Spells.findOneAndUpdate(
        { _id: spellId },
        { res_text },
        { new: true }
      );

      if (!spell) {
        return res.status(404).json({ error: "Spell not found" });
      }

      res.status(200).json({ message: "Spell updated successfully", spell });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
