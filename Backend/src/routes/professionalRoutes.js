import express from "express";
import { getProfessionals } from "../controllers/professionalController.js";

const router = express.Router();

router.get("/", getProfessionals);

export default router;