import { Sequelize } from "sequelize";
import config from "./dotenv.js"; // Importamos la configuración centralizada

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