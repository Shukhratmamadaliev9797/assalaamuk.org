import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true },
  paragraph: { type: String, required: true },
  subtitle1: { type: String, required: false },
  paragraph1: { type: String, required: false },
  image1: { type: String, required: false },
  subtitle2: { type: String, required: false },
  paragraph2: { type: String, required: false },
  image2: { type: String, required: false },
  subtitle3: { type: String, required: false },
  paragraph3: { type: String, required: false },
  image3: { type: String, required: false },
  subtitle4: { type: String, required: false },
  paragraph4: { type: String, required: false },
  image4: { type: String, required: false },
  targetAmount: { type: Number, required: true },
  currentAmount: { type: Number, required: false },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
