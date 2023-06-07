import connectMongo from "../../../../connect/DBconnect";
import AppUsers from "../../../../model/AppUserSchema";
import Projects from "../../../../model/ProjectSchema";
import Spells from "../../../../model/SpellSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    console.log("i am in backend");
    console.log("req body: ", req.body);
    const { project_id, user_email } = req.body;

    try {
      connectMongo().catch((error) =>
        res.json({ error: "Connection Failed...!" })
      );

      // Delete the project document
      const project = await Projects.findByIdAndDelete(project_id);
      //   console.log("Delete Project Res: ", project);

      // Delete all spells associated with the project
      const spellIds = project.spells.map((spell) => spell._id);
      //   console.log("Spell Ids: ", spellIds);
      await Spells.deleteMany({ _id: { $in: spellIds } });

      // Remove the project from the projects array in the appUser document
      const userRes = await AppUsers.findOneAndUpdate(
        { email: user_email },
        { $pull: { projects: { name: project.name } } }
      );

      //   console.log("Project Arr Update: ", userRes);

      res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
      console.log(error, "i am in delete project backend");
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
