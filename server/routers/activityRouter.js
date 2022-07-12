import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken, isAuth, isAdmin } from "../utils.js";
import Activity from "../models/activityModel.js";

const activityRouter = express.Router();

activityRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const activities = await Activity.find({});
    res.send(activities);
  })
);

activityRouter.post(
  "/createActivity",
  expressAsyncHandler(async (req, res) => {
    const activity = new Activity({
      title: req.body.title,
      image: req.body.image,
      icon: req.body.icon,
      subtitle1: req.body.subtitle1,
      paragraph1: req.body.paragraph1,
      image1: req.body.image1,
      subtitle2: req.body.subtitle2,
      paragraph2: req.body.paragraph2,
      image2: req.body.image2,
      subtitle3: req.body.subtitle3,
      paragraph3: req.body.paragraph3,
      image3: req.body.image3,
      subtitle4: req.body.subtitle4,
      paragraph4: req.body.paragraph4,
      image4: req.body.image4,
      subtitle5: req.body.subtitle5,
      paragraph5: req.body.paragraph5,
      image5: req.body.image5,
      subtitle6: req.body.subtitle6,
      paragraph6: req.body.paragraph6,
      image6: req.body.image6,
    });
    const createdActivity = await activity.save();

    res.send({ message: "Activity Created", activity: createdActivity });
  })
);

activityRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const activity = await Activity.findById(req.params.id);
    if (activity) {
      const deleteActivity = await activity.remove();
      res.send({ message: "Activity Deleted", activity: deleteActivity });
    } else {
      res.status(404).send({ message: "Activity Not Found" });
    }
  })
);

activityRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const activity = await Activity.findById(req.params.id);
    if (activity) {
      activity.title = req.body.title || activity.title;
      activity.image = req.body.image || activity.image;
      activity.icon = req.body.icon || activity.icon;
      activity.subtitle1 = req.body.subtitle1 || activity.subtitle1;
      activity.paragraph1 = req.body.paragraph1 || activity.paragraph1;
      activity.image1 = req.body.image1 || activity.image1;
      activity.subtitle2 = req.body.subtitle2 || activity.subtitle2;
      activity.paragraph2 = req.body.paragraph2 || activity.paragraph2;
      activity.image2 = req.body.image2 || activity.image2;
      activity.subtitle3 = req.body.subtitle3 || activity.subtitle3;
      activity.paragraph3 = req.body.paragraph3 || activity.paragraph3;
      activity.image3 = req.body.image3 || activity.image3;
      activity.subtitle4 = req.body.subtitle4 || activity.subtitle4;
      activity.paragraph4 = req.body.paragraph4 || activity.paragraph4;
      activity.image4 = req.body.image4 || activity.image4;
      activity.subtitle5 = req.body.subtitle5 || activity.subtitle5;
      activity.paragraph5 = req.body.paragraph5 || activity.paragraph5;
      activity.image5 = req.body.image5 || activity.image5;
      activity.subtitle6 = req.body.subtitle6 || activity.subtitle6;
      activity.paragraph6 = req.body.paragraph6 || activity.paragraph6;
      activity.image6 = req.body.image6 || activity.image6;

      const updatedActivity = await activity.save();
      res.send({
        message: "Activity Updated",
        activity: updatedActivity,
      });
    }
  })
);

activityRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const activity = await Activity.findById(req.params.id);
    if (activity) {
      res.send(activity);
      console.log(activity);
    } else {
      res.status(404).send({ message: "Activity Not Found" });
    }
  })
);

export default activityRouter;
