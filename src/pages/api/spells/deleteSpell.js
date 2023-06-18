import connectMongo from "../../../../connect/DBconnect";
import Projects from "../../../../model/ProjectSchema";
import Spells from "../../../../model/SpellSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    console.log("i am in backend");
    console.log("req body: ", req.body);
    const { spell_id, user_email } = req.body;

    try {
      connectMongo().catch((error) =>
        res.json({ error: "Connection Failed...!" })
      );

      // Delete the spell document
      const spell = await Spells.findByIdAndDelete(spell_id);
      //   console.log("Delete Spell Res: ", spell);

      // Remove the project from the projects array in the appUser document
      const ProjectRes = await Projects.findOneAndUpdate(
        { user_email, name: spell.proj_name },
        { $pull: { spells: { _id: spell._id } }, last_edited_on: new Date() }
      );

      //   console.log("Project Arr Update: ", ProjectRes);

      res.status(200).json({ message: "Spell deleted successfully" });
    } catch (error) {
      console.log(error, "i am in delete spell backend");
      res
        .status(500)
        .json({ error: "An error occurred while deleting the project" });
    }
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
