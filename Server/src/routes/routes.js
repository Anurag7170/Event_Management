import express from "express";
const router = express.Router();

import { UserSignup, login } from "../controller/user.js";
import { contantUs, eventCreate } from "../controller/event.js";

router.route("/signup").post(UserSignup);
router.route("/login").post(login);
router.route("/booking").post(eventCreate);
router.route("/contantUs").post(contantUs);

export default router;
