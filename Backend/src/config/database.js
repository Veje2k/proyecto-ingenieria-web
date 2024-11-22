import { Sequelize } from "sequelize";
import config from "./dotenv.js"; // Importamos la configuración centralizada

console.log('process.env.DB_password',process.env.DB_PASSWORD);
console.log('DB Password:', config.db.password);

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        port: config.db.port,
        dialect: "postgres",
        logging: false, // Desactiva los logs de SQL
    }
);

export default sequelize;