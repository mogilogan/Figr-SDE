import express from "express";
const router = express.Router();

import {createproject, fetchproject, fetchprojects} from "../controllers/projects.js"

router.post("/create", createproject);
router.post("/fetchprojects", fetchprojects);
router.post("/fetchproject", fetchproject);


export default router;