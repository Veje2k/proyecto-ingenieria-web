import express from "express";
import { createService, getServicesByUserId, getTypesServices, updateServiceStatus } from "../controllers/serviceController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createService);
router.get("/typeServices/", getTypesServices);
router.get("/:id", getServicesByUserId);
router.put("/", updateServiceStatus);

export default router;