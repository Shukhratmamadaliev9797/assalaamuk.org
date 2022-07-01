import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: false },
    image: { type: String, required: false },
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
  },
  { timestamps: true }
);

const News = mongoose.model("News", newsSchema);
export default News;
