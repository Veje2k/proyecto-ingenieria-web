import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import petRoutes from "./routes/petRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import professionalRoutes from "./routes/professionalRoutes.js"
import { verifyToken } from "./middlewares/authMiddleware.js"; // Importar el middleware de autenticación
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors({
    origin: 'http://localhost:8100',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// Rutas públicas
app.use("/usuarios", userRoutes);

// Rutas protegidas
app.use("/mascotas", verifyToken, petRoutes);
app.use("/servicio", verifyToken, serviceRoutes);
app.use("/profesionales", verifyToken, professionalRoutes);

// Sincronizar la base de datos y arrancar el servidor
sequelize
    .sync()
    .then(() => {
        console.log("Conexión con la base de datos exitosa.");
        app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
    })
    .catch((error) => {
        console.error("Error al conectar con la base de datos:", error);
    });