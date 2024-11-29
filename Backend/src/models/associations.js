import Service from './service.js';
import ServiceType from './serviceType.js';
import Professional from './professional.js';
import Pet from './pet.js';
import Usuario from './user.js';

// Definir las asociaciones
Service.belongsTo(ServiceType, { foreignKey: 'id_tipo_servicio' });
Service.belongsTo(Professional, { foreignKey: 'id_veterinario' });
Service.belongsTo(Pet, { foreignKey: 'id_mascota' });
Service.belongsTo(Usuario, { foreignKey: 'id_usuario' });

ServiceType.hasMany(Service, { foreignKey: 'id_tipo_servicio' });
Professional.hasMany(Service, { foreignKey: 'id_veterinario' });
Pet.hasMany(Service, { foreignKey: 'id_mascota' });
Usuario.hasMany(Service, { foreignKey: 'id_usuario' });

// Exportar como objeto por defecto
const models = { Service, ServiceType, Professional, Pet, Usuario };
export default models;
