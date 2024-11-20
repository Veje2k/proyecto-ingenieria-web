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