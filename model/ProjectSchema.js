import { Schema, model, models } from "mongoose";

const spellSchema = new Schema({
  spell_id: { type: String, required: true },
  user_email: { type: String, required: true },
  name: { type: String, required: true },
  spell_type: { type: String, required: true },
  created_on: { type: Date, default: Date.now },
  last_edited_on: { type: Date, default: Date.now },
  created_by: { type: String, required: true },
});

const projectSchema = new Schema({
  proj_id: { type: String, required: true },
  user_email: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  created_on: { type: Date, default: Date.now },
  last_edited_on: { type: Date, default: Date.now },
  created_by: { type: String, required: true },
  spells: [spellSchema],
  // spells: [String]
});

const Projects = models.project || model("project", projectSchema);

export default Projects;
