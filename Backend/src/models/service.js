import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Pet from "./pet.js";
import Professional from "./professional.js";
import ServiceType from "./serviceType.js";

const Service = sequelize.define("Servicio", {
  id_servicio: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fecha: { type: DataTypes.DATE, allowNull: false },
  estado: { type: DataTypes.STRING, allowNull: false },
  id_tipo_servicio: { type: DataTypes.INTEGER, references: { model: ServiceType, key: "id_tipo_servicio" } },
  id_veterinario: { type: DataTypes.INTEGER, references: { model: Professional, key: "id_profesional" } },
  id_mascota: { type: DataTypes.INTEGER, references: { model: Pet, key: "id_mascota" } },
});

export default Service;
