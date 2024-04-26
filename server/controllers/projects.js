import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import ProjectModal from "../models/projects.js";

const secret = "test";

export const createproject = async (req, res) => {
  const { email, colors, radius, spacing, name } = req.body;

  try {
    const oldProject = await ProjectModal.findOne({ name });

    if (oldProject) return res.status(404).json({ message: "Project with the same name already exists!" });

    const result = await ProjectModal.create({
      email,
      name,
      colors,
      radius,
      spacing,
    });

    res.status(201).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

export const fetchprojects = async (req, res) => {
  const { email } = req.body;


  try {
    const Projects = await ProjectModal.find({ email}).select('name');;

    if (!Projects) return res.status(404).json({ message: "No Projects for the given mail id!" });

    res.status(201).json({ Projects });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

export const fetchproject = async (req, res) => {
  const { name } = req.body;
console.log(req.body);

  try {
    const Projects = await ProjectModal.findOne({ name})

    if (!Projects) return res.status(404).json({ message: "No Projects exist with the given project name!" });

    res.status(201).json({ Projects });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
