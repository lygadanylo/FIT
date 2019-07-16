import express from "express";
import * as userController from "../controllers/profile";

const router = express.Router();

router.get("/profile",userController.fetchUser);

export default router;