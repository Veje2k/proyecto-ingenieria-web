import Service from "../models/service.js";

export const createService = async (req, res) => {
    try {
        const { fecha, estado, id_tipo_servicio, id_veterinario, id_mascota } = req.body;

        const newService = await Service.create({ fecha, estado, id_tipo_servicio, id_veterinario, id_mascota });
        res.status(201).json({ message: "Servicio agendado con éxito", service: newService });
    } catch (error) {
        res.status(500).json({ message: "Error al agendar servicio", error });
    }
};

export const getServicesByUserId = async (req, res) => {
    try {
        const id=req.params.id;
        const services = await Service.findAll().filter(service => service.id_usuario === id);
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener servicios", error });
    }
};