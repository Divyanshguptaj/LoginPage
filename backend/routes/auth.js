import express from "express";
import { authHandler } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", authHandler);

export default router;
