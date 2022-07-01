import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import { generateToken, isAuth, isAdmin } from "../utils.js";
import News from "../models/newsModel.js";

const newsRouter = express.Router();

newsRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const news = await News.find({});
    res.send(news);
  })
);

newsRouter.post(
  "/createNews",
  expressAsyncHandler(async (req, res) => {
    const news = new News({
      title: req.body.title,
      image: req.body.image,
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
    });
    const createdNews = await news.save();

    res.send({ message: "News Created", news: createdNews });
  })
);

newsRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const news = await News.findById(req.params.id);
    if (news) {
      const deleteNews = await news.remove();
      res.send({ message: "News Deleted", news: deleteNews });
    } else {
      res.status(404).send({ message: "News Not Found" });
    }
  })
);

newsRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const news = await News.findById(req.params.id);
    if (news) {
      news.title = req.body.title || news.title;
      news.image = req.body.image || activity.image;
      news.subtitle1 = req.body.subtitle1 || news.subtitle1;
      news.paragraph1 = req.body.paragraph1 || news.paragraph1;
      news.image1 = req.body.image1 || news.image1;
      news.subtitle2 = req.body.subtitle2 || news.subtitle2;
      news.paragraph2 = req.body.paragraph2 || news.paragraph2;
      news.image2 = req.body.image2 || news.image2;
      news.subtitle3 = req.body.subtitle3 || news.subtitle3;
      news.paragraph3 = req.body.paragraph3 || news.paragraph3;
      news.image3 = req.body.image3 || news.image3;
      news.subtitle4 = req.body.subtitle4 || news.subtitle4;
      news.paragraph4 = req.body.paragraph4 || news.paragraph4;
      news.image4 = req.body.image4 || news.image4;

      const updatedNews = await news.save();
      res.send({
        message: "News Updated",
        news: updatedNews,
      });
    }
  })
);

export default newsRouter;
