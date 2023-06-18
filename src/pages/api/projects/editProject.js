import connectMongo from "../../../../connect/DBconnect";
import Projects from "../../../../model/ProjectSchema";
import Spells from "../../../../model/SpellSchema";
import AppUsers from "../../../../model/AppUserSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    console.log("i am in backend");
    console.log("req body: ", req.body);
    const { projectId, newName, newDescription, user_email } = req.body;

    try {
      const project = await Projects.findById(projectId);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }
      const oldProjName = project.name;

      // Check if the new project name already exists for the user
      //   const { user_email } = project;
      const existingProject = await Projects.findOne({
        user_email,
        name: newName,
      });
      if (existingProject && existingProject._id.toString() !== projectId) {
        console.log("Duplicate project name found");
        return res
          .status(400)
          .json({ message: "Project with that name already exists" });
      }

      // Update the project details
      project.name = newName;
      project.description = newDescription;
      project.last_edited_on = new Date();

      const updatedProject = await project.save();
      console.log("Updated Project Data: ", updatedProject);

      // Update project name in AppUser document
      const user = await AppUsers.findOne({ email: user_email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const projectIndex = user.projects.findIndex(
        (proj) => proj._id == projectId
      );
      if (projectIndex !== -1) {
        user.projects[projectIndex].name = newName;
        user.projects[projectIndex].last_edited_on = new Date();
        await user.save();
      }

      // Update project name in Spell documents
      await Spells.updateMany(
        { proj_name: oldProjName, user_email },
        { proj_name: newName }
      );
      res.status(200).json({ msg: "Project Details Updated Successfully" });
    } catch (err) {
      console.log(err, "i am in edit project backend");
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid, only POST is accepted" });
  }
}
