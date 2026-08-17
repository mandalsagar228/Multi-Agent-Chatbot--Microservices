import express from "express";
import { agents } from "../controllers/agent.controller.js";

const router = express.Router();

router.post("/chat", agents);

export default router;
