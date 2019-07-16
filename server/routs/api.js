import express from "express";
import authRouter from "./auth";
import accountRouter from "./account";

const router = express.Router();

router.use("/auth",authRouter);
router.use("/account",accountRouter);

export default router;