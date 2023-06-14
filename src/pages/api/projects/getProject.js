import connectMongo from "../../../../connect/DBconnect";
import Projects from "../../../../model/ProjectSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    console.log("i am in backend");
    console.log("req body: ", req.body);
    const { user_email, project_name } = req.body;

    if (user_email && !project_name) {
      try {
        const projects = await Projects.find({ user_email });
        res.status(200).json({ data: projects });
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    } else if (user_email && project_name) {
      try {
        const project = await Projects.findOne({
          user_email,
          name: project_name,
        });
        if (project) {
          res.status(200).json({ data: project });
        } else {
          res.status(404).json({ message: "Project not found" });
        }
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    } else {
      res.status(400).json({ message: "Invalid request" });
    }
  }
}
