import express from "express";
import expressAsyncHandler from "express-async-handler";
import Project from "../models/projectModal.js";
import { generateToken, isAuth, isAdmin } from "../utils.js";

const projectRouter = express.Router();

projectRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const projects = await Project.find({});
    res.send(projects);
  })
);

projectRouter.post(
  "/createProject",
  expressAsyncHandler(async (req, res) => {
    const project = new Project({
      title: req.body.title,
      image: req.body.image,
      location: req.body.location,
      category: req.body.category,
      paragraph: req.body.paragraph,
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
      targetAmount: req.body.targetAmount,
      currentAmount: req.body.currentAmount,
    });
    const createdProject = await project.save();

    res.send({ message: "Project Created", project: createdProject });
  })
);

projectRouter.delete(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (project) {
      const deleteProject = await project.remove();
      res.send({ message: "Project Deleted", project: deleteProject });
    } else {
      res.status(404).send({ message: "Project Not Found" });
    }
  })
);

projectRouter.put(
  "/:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (project) {
      project.title = req.body.title || project.title;
      project.image = req.body.image || project.image;
      project.location = req.body.location || project.location;
      project.category = req.body.category || project.category;
      project.paragraph = req.body.paragraph || project.paragraph;
      project.subtitle1 = req.body.subtitle1 || project.subtitle1;
      project.paragraph1 = req.body.paragraph1 || project.paragraph1;
      project.image1 = req.body.image1 || project.image1;
      project.subtitle2 = req.body.subtitle2 || project.subtitle2;
      project.paragraph2 = req.body.paragraph2 || project.paragraph2;
      project.image2 = req.body.image2 || project.image2;
      project.subtitle3 = req.body.subtitle3 || project.subtitle3;
      project.paragraph3 = req.body.paragraph3 || project.paragraph3;
      project.image3 = req.body.image3 || project.image3;
      project.subtitle4 = req.body.subtitle4 || project.subtitle4;
      project.paragraph4 = req.body.paragraph4 || project.paragraph4;
      project.image4 = req.body.image4 || project.image4;
      project.targetAmount = req.body.targetAmount || project.targetAmount;
      project.currentAmount = req.body.currentAmount || project.currentAmount;
      const updatedProject = await project.save();
      res.send({
        message: "Project Updated",
        project: updatedProject,
      });
    }
  })
);

projectRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    if (project) {
      res.send(project);
    } else {
      res.status(404).send({ message: "Project Not Found" });
    }
  })
);

projectRouter.get(
  "/relatedProjects/:id",
  expressAsyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id);
    const projects = await Project.find({});
    const relatedProjects = projects.filter((x) => {
      return x.category === project.category;
    });
    res.send(relatedProjects);
  })
);
export default projectRouter;
