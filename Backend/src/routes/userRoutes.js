import express from "express";
import { registerUser, loginUser, logoutUser, currentUserInfo } from "../controllers/userController.js";
import { verifyToken } from "../middlewares/authMiddleware.js"; // Importar el middleware de autenticación

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", verifyToken, currentUserInfo);
router.post("/logout", logoutUser);

export default router;