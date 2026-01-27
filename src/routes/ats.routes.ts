// routes/ats.routes.ts

import express from "express";
import { calculateATSScore } from "../controllers/ats.controller";

const router = express.Router();

router.post("/calculate", calculateATSScore);

export default router;
