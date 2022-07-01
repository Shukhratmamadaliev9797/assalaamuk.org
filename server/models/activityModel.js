import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    image: { type: String, required: false },
    icon: { type: String, required: true },
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
    subtitle5: { type: String, required: false },
    paragraph5: { type: String, required: false },
    image5: { type: String, required: false },
    subtitle6: { type: String, required: false },
    paragraph6: { type: String, required: false },
    image6: { type: String, required: false },
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", activitySchema);
export default Activity;
