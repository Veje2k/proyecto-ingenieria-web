import dotenv from "dotenv";

// Carga las variables de entorno desde el archivo `.env`
dotenv.config();

// Imprime las variables de entorno para depuración
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('BCRYPT_SALT:', process.env.BCRYPT_SALT);
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