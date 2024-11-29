import express from "express";
import { getProfessionals } from "../controllers/professionalController.js";
import { verifyToken } from "../middlewares/authMiddleware.js"; // Importar el middleware de autenticación


const router = express.Router();

router.get("/", verifyToken, getProfessionals);

export default router;