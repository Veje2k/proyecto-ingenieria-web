import Pet from "../models/pet.js";

export const createPet = async (req, res) => {
    try {
        const { nombre, especie, raza, edad, id_usuario } = req.body;

        const newPet = await Pet.create({ nombre, especie, raza, edad, id_usuario });
        res.status(201).json({ message: "Mascota registrada con éxito", pet: newPet });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar mascota", error });
    }
};