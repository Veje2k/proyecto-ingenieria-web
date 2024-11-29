import express from "express";
import { createPet, getPetsByUser } from "../controllers/petController.js";

const router = express.Router();

router.post("/", createPet);
router.get("/:id_usuario", getPetsByUser);

export default router;