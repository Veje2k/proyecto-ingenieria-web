import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./user.js";

const Pet = sequelize.define("Mascota", {
    id_mascota: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    especie: { type: DataTypes.STRING },
    raza: { type: DataTypes.STRING },
    edad: { type: DataTypes.INTEGER },
});

Pet.belongsTo(User, { foreignKey: "id_usuario" });

export default Pet;