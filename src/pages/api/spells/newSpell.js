import connectMongo from "../../../../connect/DBconnect";
import Spells from "../../../../model/SpellSchema";

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
    });
    if (checkexisting) {
      console.log("Double Spell spotted");
      return res.status(200).json({ message: "Spell Already Exists...!" });
    } else {
      try {
        let spell = new Spells({
          spell_id: "spellid12",
          name,
          user_email,
          spell_type,
          proj_id,
          proj_name,
          proj_category,
          created_by,
        });

        const resData = await spell.save();
        console.log("Project ResData: ", resData);

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
