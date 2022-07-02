import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import cors from "cors";
import activityRouter from "./routers/activityRouter.js";
import uploadRouter from "./routers/uploadRouter.js";
import path from "path";
import projectRouter from "./routers/projectRouter.js";
import newsRouter from "./routers/newsRouter.js";
import paymentRouter from "./routers/paymentRouter.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose.connect(
  process.env.MONGODB_URL || "mongodb://localhost/assalaamuk",
  {}
);

app.use("/api/users", userRouter);
app.use("/api/activities", activityRouter);
app.use("/api/projects", projectRouter);
app.use("/api/news", newsRouter);
app.use("/api/uploads", uploadRouter);
app.use("/api/payment", paymentRouter);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/client/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const server = app.listen(process.env.PORT || 5001, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
