-- Tabla Usuario
CREATE TABLE Usuario (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    edad INT,
    correo VARCHAR(150) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    direccion VARCHAR(255),
    rut VARCHAR(20) UNIQUE,
    telefono INT
);

-- Tabla Mascota
CREATE TABLE Mascota (
    id_mascota SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    raza VARCHAR(100),
    edad INT,
    id_usuario INT NOT NULL,
    CONSTRAINT fk_usuario_mascota FOREIGN KEY (id_usuario) REFERENCES Usuario (id_usuario)
);

-- Tabla Profesional
CREATE TABLE Profesional (
    id_profesional SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    rut VARCHAR(20) UNIQUE,
    especialidad VARCHAR(100),
    disponibilidad VARCHAR(100),
    telefono INT
);

-- Tabla TipoServicio
CREATE TABLE TipoServicio (
    id_tipo_servicio SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255)
);

-- Tabla Servicio
CREATE TABLE Servicio (
    id_servicio SERIAL PRIMARY KEY,
    fecha TIMESTAMP NOT NULL,
    estado VARCHAR(50) NOT NULL,
    id_tipo_servicio INT NOT NULL,
    id_veterinario INT NOT NULL,
    id_mascota INT NOT NULL,
    CONSTRAINT fk_tipo_servicio FOREIGN KEY (id_tipo_servicio) REFERENCES TipoServicio (id_tipo_servicio),
    CONSTRAINT fk_veterinario FOREIGN KEY (id_veterinario) REFERENCES Profesional (id_profesional),
    CONSTRAINT fk_mascota FOREIGN KEY (id_mascota) REFERENCES Mascota (id_mascota)
);