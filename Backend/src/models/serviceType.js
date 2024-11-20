import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ServiceType = sequelize.define("TipoServicio", {
    id_tipo_servicio: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING },
});

export default ServiceType;