import { Schema, model, models } from "mongoose";

const projectSchema = new Schema({
  proj_id: { type: String, required: true },
  user_email: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  created_on: { type: Date, default: Date.now },
  last_edited_on: { type: Date, default: Date.now },
  created_by: { type: String, required: true },
  spells: [{ type: Schema.Types.ObjectId, ref: "spell" }],
  // spells: [String]
});

const Projects = models.project || model("project", projectSchema);

export default Projects;
