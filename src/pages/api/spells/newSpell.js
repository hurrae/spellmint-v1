import connectMongo from "../../../../connect/DBconnect";
import Spells from "../../../../model/SpellSchema";
import Projects from "../../../../model/ProjectSchema";
import { nanoid } from "nanoid";

export default async function handler(req, res) {
  connectMongo().catch((error) => res.json({ error: "Connection Failed...!" }));

  if (req.method === "POST") {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data...!" });

    console.log("i am in backend");
    console.log("req body: ", req.body);
    const {
      name,
      user_email,
      spell_type,
      proj_id,
      proj_name,
      proj_category,
      created_by,
    } = req.body;

    // // check duplicate projects
    const checkexisting = await Spells.findOne({
      user_email,
      name: name,
      proj_name,
    });
    if (checkexisting) {
      console.log("Double Spell spotted");
      return res.status(400).json({ message: "Spell Already Exists...!" });
    } else {
      try {
        const project = await Projects.findOne({ name: proj_name, user_email });
        if (!project) {
          return res.status(404).json({ error: "Project not found" });
        }

        const shareCode =
          nanoid(11) + "_" + nanoid(10) + "-" + nanoid(12) + "_" + nanoid(11);
        console.log("Share code: ", shareCode);

        let spell = new Spells({
          spell_id: "spellid12",
          name,
          user_email,
          spell_type,
          proj_id,
          proj_name,
          proj_category,
          created_by,
          share_code: shareCode,
        });

        const resData = await spell.save();
        console.log("Spell ResData: ", resData);

        project.spells.push(resData);
        // Save the updated project document
        const prResData = await project.save();
        console.log("Project Updated Data: ", prResData);

        res.status(200).json({ data: resData });
      } catch (err) {
        console.log(err, "i am in spell backend");
      }
    }
  } else {
    res
      .status(500)
      .json({ message: "HTTP method not valid only POST Accepted" });
  }
}
