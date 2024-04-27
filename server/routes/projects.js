import express from "express";
const router = express.Router();

import {createproject, fetchproject, fetchprojects, updateProject} from "../controllers/projects.js"

router.post("/create", createproject);
router.post("/fetchprojects", fetchprojects);
router.post("/fetchproject", fetchproject);
router.post("/updateproject", updateProject);


export default router;