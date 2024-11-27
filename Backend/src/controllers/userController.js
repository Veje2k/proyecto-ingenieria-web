import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const registerUser = async (req, res) => {
    try {
        const { nombre, apellido, edad, correo, contrasena, direccion, rut, telefono } = req.body;

        const hashedPassword = await bcrypt.hash(contrasena, 10);
        const newUser = await User.create({
            nombre,
            apellido,
            edad,
            correo,
            contrasena: hashedPassword,
            direccion,
            rut,
            telefono,
        });

        res.status(201).json({ message: "Usuario registrado exitosamente", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario", error });
        console.error(error);
    }
};

export const loginUser = async (req, res) => {
    try {
        const { correo, contrasena } = req.body;

        const user = await User.findOne({ where: { correo } });

        if (!user || !(await bcrypt.compare(contrasena, user.contrasena))) {
            return res.status(401).json({ message: "Credenciales inválidas" });
        }

        const token = jwt.sign({ id: user.id_usuario }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Enviar la cookie
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        res.json({ message: "Inicio de sesión exitoso" });
        
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión", error });
    }
};