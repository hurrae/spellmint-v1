import connectMongo from "../../../../connect/DBconnect";
import AppUsers from "../../../../model/AppUserSchema";
import Projects from "../../../../model/ProjectSchema";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    console.log("i am in backend");
    console.log("req body: ", req.body);
    const { name, user_email, category, description, created_by } = req.body;

    // // check duplicate projects
    const checkexisting = await Projects.findOne({
      user_email,
      name: name,
    });
    if (checkexisting) {
      console.log("Double Project spotted");
      return res.status(400).json({ message: "Project Already Exists...!" });
    } else {
      try {
        const user = await AppUsers.findOne({ email: user_email });
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }

        let project = new Projects({
          proj_id: "projid12",
          name,
          user_email,
          category,
          description,
          created_by,
        });

        const resData = await project.save();
        console.log("Project ResData: ", resData);

        user.projects.push(resData);
        // Save the updated project document
        const AppUserResData = await user.save();
        console.log("AppUser Updated Data: ", AppUserResData);

        res.status(200).json({ data: resData });
      } catch (err) {
        console.log(err, "i am in create project backend");
      }
    }
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
