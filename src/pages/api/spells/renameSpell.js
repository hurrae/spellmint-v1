import connectMongo from "../../../../connect/DBconnect";
import Projects from "../../../../model/ProjectSchema";
import Spells from "../../../../model/SpellSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body) {
      return res.status(404).json({ error: "Request body not found" });
    }

    const { proj_name, spellId, user_email, newSpellName } = req.body;

    try {
      const existingSpell = await Spells.findOne({
        user_email,
        name: newSpellName,
        proj_name,
      });
      if (existingSpell && existingSpell._id.toString() !== spellId) {
        console.log("Duplicate spell name found");
        return res.status(400).json({
          message: "Spell with that name already exists in this project",
        });
      }
      // Update the spell in the Spells collection
      const updatedSpell = await Spells.findByIdAndUpdate(spellId, {
        name: newSpellName,
        last_edited_on: new Date(),
      });

      if (!updatedSpell) {
        return res.status(404).json({ error: "Spell not found" });
      }

      // Update the spell in the Project's spells array
      const updatedProject = await Projects.findOneAndUpdate(
        { name: proj_name, user_email, "spells._id": spellId },
        {
          $set: {
            "spells.$.name": newSpellName,
            "spells.$.last_edited_on": new Date(),
          },
        },
        { new: true }
      );

      if (!updatedProject) {
        return res.status(404).json({ error: "Project or Spell not found" });
      }

      res.status(200).json({ data: updatedSpell });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid, only PUT accepted" });
  }
}
