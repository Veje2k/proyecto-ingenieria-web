import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Pet from "./pet.js";
import Professional from "./professional.js";
import ServiceType from "./serviceType.js";
import Usuario from './user.js'

const Service = sequelize.define("Servicio", {
  id_servicio: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fecha: { type: DataTypes.DATE, allowNull: false },
  estado: { type: DataTypes.STRING, allowNull: false },
  id_tipo_servicio: { type: DataTypes.INTEGER, references: { model: ServiceType, key: "id_tipo_servicio" } },
  id_veterinario: { type: DataTypes.INTEGER, references: { model: Professional, key: "id_profesional" } },
  id_mascota: { type: DataTypes.INTEGER, references: { model: Pet, key: "id_mascota" } },
  id_usuario: { type: DataTypes.INTEGER, references: { model: Usuario, key: "id_usuario" } },
});

Service.belongsTo(ServiceType, { foreignKey: 'id_tipo_servicio' });
Service.belongsTo(Professional, { foreignKey: 'id_veterinario' });

ServiceType.hasMany(Service, { foreignKey: 'id_tipo_servicio' });
Professional.hasMany(Service, { foreignKey: 'id_veterinario' });


export default Service;
