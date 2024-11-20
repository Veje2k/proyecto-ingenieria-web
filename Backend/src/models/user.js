import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const User = sequelize.define("Usuario", {
    id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    apellido: { type: DataTypes.STRING, allowNull: false },
    edad: { type: DataTypes.INTEGER },
    correo: { type: DataTypes.STRING, unique: true, allowNull: false },
    contrasena: { type: DataTypes.STRING, allowNull: false },
    direccion: { type: DataTypes.STRING },
    rut: { type: DataTypes.STRING, unique: true },
    telefono: { type: DataTypes.INTEGER },
});

export default User;