import express from "express";
const router = express.Router();

import {signin,signup,updatepass,update} from "../controllers/user.js"

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/updatepass", updatepass);
router.post("/update",update);

export default router;