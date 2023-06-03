import { Schema, model, models } from "mongoose";

const appUserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  unid: {
    type: Number,
    required: true,
    default: Math.floor(Math.random() * 100),
  },
  projects: [{ type: Schema.Types.ObjectId, ref: "project" }],
});

const AppUsers = models.appUser || model("appUser", appUserSchema);

export default AppUsers;
