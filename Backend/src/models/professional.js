import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Professional = sequelize.define("Profesional", {
    id_profesional: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false },
    rut: { type: DataTypes.STRING, unique: true },
    especialidad: { type: DataTypes.STRING },
    disponibilidad: { type: DataTypes.STRING },
    telefono: { type: DataTypes.INTEGER },
});

export default Professional;