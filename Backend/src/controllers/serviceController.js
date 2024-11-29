import Professional from "../models/professional.js";
import Service from "../models/service.js";
import ServiceType from "../models/serviceType.js";

export const createService = async (req, res) => {
    try {
        console.log(req.body);
        const { fecha, estado, id_tipo_servicio, id_veterinario, id_mascota, id_usuario } = req.body;

        const newService = await Service.create({ fecha, estado, id_tipo_servicio, id_veterinario, id_mascota, id_usuario });
        res.status(201).json({ success: true, message: "Servicio agendado con éxito", service: newService });
    } catch (error) {
        console.log('Error: ', error);
        res.status(500).json({ success: false, message: "Error al agendar servicio", error });
    }
};

export const getServicesByUserId = async (req, res) => {
    try {
        const id=req.params.id;
        const services = await Service.findAll({
            where: { id_usuario: id },
            include: [{
                model: ServiceType,
                attributes: ['nombre', 'descripcion']
            },
            {
                model: Professional,
                attributes: ['nombre', 'apellido']
            }],
        });
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener servicios", error });
    }
};

export const getTypesServices = async (req, res) => {
    try {
        console.log('hola');
        const servicesTypes = await ServiceType.findAll();
        console.log('gettypesServices', servicesTypes);
        res.json(servicesTypes);
    } catch (error) {
        console.log('REQ: ', req, '-', error);
        res.status(500).json({ message: "Error al obtener tipos de servicio", error });
    }
};

export const updateServiceStatus = async (req, res) => {
    try {
        const { serviceId, nuevoEstado } = req.body;

        // Busca el servicio por ID
        const service = await Service.findByPk(serviceId);

        if (!service) {
            return res.status(404).json({ message: "Servicio no encontrado" });
        }

        // Actualiza el estado del servicio
        service.estado = nuevoEstado;

        // Guarda los cambios
        await service.save();

        res.status(200).json({
            message: "Estado del servicio actualizado con éxito",
            service
        });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar estado del servicio", error });
    }
};
