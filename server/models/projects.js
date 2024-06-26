import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  colors: {
    primary: { type: String, required: true },
    secondary: { type: String, required: true },
    tertiary: { type: String, required: true },
    quardinary: { type: String, required: true },
  },
  radius: {
    M: { type: String, required: true },
    Lg: { type: String, required: true },
    s: { type: String, required: true },
    Xl: { type: String, required: true },
  },
  spacing: {
    M: { type: String, required: true },
    Lg: { type: String, required: true },
    s: { type: String, required: true },
    Xl: { type: String, required: true },
  },
  backgroundcolor: { type: String },
  textcolor: { type: String },
  bordercolor: { type: String },
  borderradius: { type: String },
  components: [
    mongoose.Schema(
      {
        className:{type: String},
        element:{type: String},
      },
      { _id: true }
    ),
  ],

  id: { type: String },
});

export default mongoose.model("Projects", projectSchema);
