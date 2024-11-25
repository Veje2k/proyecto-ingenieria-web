import dotenv from "dotenv";

// Carga las variables de entorno desde el archivo `.env`
dotenv.config();

export default {
    port: process.env.PORT || 5000,
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    jwtSecret: process.env.JWT_SECRET,
    bcryptSalt: parseInt(process.env.BCRYPT_SALT, 10),
};