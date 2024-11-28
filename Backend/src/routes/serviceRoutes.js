import express from "express";
import { createService, getServicesByUserId } from "../controllers/serviceController.js";

const router = express.Router();

router.post("/", createService);
router.get("/:id", getServicesByUserId);

export default router;