import express from "express";
import * as authController from "../controllers/auth";

const router = express.Router();

router.post("/login",authController.login, authController.onAuth);
router.post("/register",authController.register);

export default router;