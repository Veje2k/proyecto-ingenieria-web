import Professional from "../models/professional.js";

export const getProfessionals = async (req, res) => {
    try {
        const professionals = await Professional.findAll();
        res.json(professionals);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener profesionales", error });
    }
};