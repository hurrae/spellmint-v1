import { Schema, model, models } from "mongoose";

const spellSchema = new Schema({
  spell_id: { type: String, required: true },
  user_email: { type: String, required: true },
  name: { type: String, required: true },
  spell_type: { type: String, required: true },
  proj_id: { type: String, required: true },
  proj_name: { type: String, required: true },
  proj_category: { type: String, required: true },
  created_on: { type: Date, default: Date.now },
  last_edited_on: { type: Date, default: Date.now },
  created_by: { type: String, required: true },
  share_code: { type: String, required: true },
  res_text: { type: String },
});

const Spells = models.spell || model("spell", spellSchema);

export default Spells;
