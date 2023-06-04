import { Schema, model, models } from "mongoose";

const projectSchema = new Schema({
  proj_id: { type: String, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
});

const appUserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  unid: {
    type: Number,
    required: true,
    default: Math.floor(Math.random() * 100),
  },
  projects: [projectSchema],
});

const AppUsers = models.appUser || model("appUser", appUserSchema);

export default AppUsers;
