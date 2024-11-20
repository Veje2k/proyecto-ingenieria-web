import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import petRoutes from "./routes/petRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/users", userRoutes);
app.use("/pets", petRoutes);
app.use("/services", serviceRoutes);

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