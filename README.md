# proyecto-ingenieria-web
## Descripción

El objetivo del proyecto se centra en una plataforma que permite la gestión integral de mascotas y la reserva de horas de atención. A través de esta herramienta, los dueños de mascotas podrán registrar a sus animales, agendar citas con veterinarios, y gestionar aspectos importantes como historial médico y controles de salud. Además, la plataforma facilita a las clínicas veterinarias la organización de sus horarios, asignación de veterinarios y control de las citas, optimizando la experiencia tanto para las mascotas como para sus dueños.

## Tabla de Contenidos

1. [Análisis de las Funcionalidades](#análisisdelasfuncionalidades)
2. [Prototipado Figma](#prototipadofigma)
3. [Maquetación Responsiva](#aaquetaciónresponsiva)
4. [Instalación](#instalación)
5. [Tecnologías](#tecnologías)


## Análisis de las Funcionalidades

- - Registro usuario: Los usuarios pueden crear una cuenta en la plataforma proporcionando sus datos. Este paso es esencial para acceder a todas las funcionalidades personalizadas que ofrece el sistema.

- - Inicio de sesión: Permite a los usuarios autenticarse en la plataforma para acceder a sus datos, gestionar mascotas y citas, y realizar otras acciones disponibles solo para usuarios registrados.

- - Registro de mascotas:  Los usuarios pueden añadir información de sus mascotas, como nombre, especie, raza, edad, sexo y peso. Este registro centraliza la información de la mascota y la asocia al usuario.

- - Ver mascotas: Muestra a los usuarios una lista de las mascotas que han registrado en la plataforma. Cada mascota estará vinculada al usuario que la registró.

- - Ver examenes: Los usuarios pueden ver los exámenes y resultados médicos subidos por los veterinarios. Cada examen estará asociado a una mascota en particular y solo será visible para el usuario que la tenga registrada.

- - Seleccion de especialidad: Los usuarios pueden seleccionar un tipo de servicio veterinario, lo que les permite elegir el tratamiento o consulta específica que necesitan para su mascota.

- - Agendar cita: Tras seleccionar una especialidad, los usuarios pueden elegir entre fechas y horas disponibles para agendar una cita. Esta funcionalidad facilita la organización y planificación de visitas al veterinario.

- - Gestionar cita: Los usuarios pueden cancelar o reagendar citas, brindando flexibilidad si surgen cambios en su disponibilidad. Los veterinarios también tienen la capacidad de reprogramar citas según sea necesario.

- - Ver mapa:  Los usuarios pueden acceder a un mapa interactivo que muestra la ubicación de la veterinaria. Esto facilita la navegación hacia la clínica, asegurando que los usuarios lleguen fácilmente a su cita.

- - Informar al usuario: Se le presentara al usuario durante su creacion o eliminacion de malos habitos, para dar a conocer hechos que podrian estarle sucediendo al usuario en su transición.


## Prototipado en Figma

[Prototipo Wireframe](https://www.figma.com/proto/OTowrJNe7AAEzTw5mqKgTv/DTS)

## Maquetación Responsiva
La aplicación será desarrollada con HTML5, CSS3 y JavaScript, utilizando frameworks como Bootstrap para la
maquetación responsiva.

## Instalación

- - Instalar Node.js y NPM
Para ejecutar un proyecto localmente con NPM, primero necesitas tener instalado Node.js (que incluye NPM).

a) Descargar e instalar Node.js (incluye NPM)
Visita la página oficial de Node.js.
Descarga la versión de Node.js adecuada para tu sistema operativo (te recomiendo la versión LTS).
Sigue las instrucciones para instalar Node.js. Una vez instalado, NPM también estará disponible.
b) Verificar la instalación
Abre una terminal y ejecuta los siguientes comandos para verificar que tanto Node.js como NPM están instalados correctamente:
bash
Copiar código
node -v
npm -v
Estos comandos deben mostrar las versiones instaladas de Node.js y NPM, respectivamente.

- - Inicializar el Proyecto
Si el proyecto no tiene ya un archivo package.json, necesitas inicializarlo.

a) Crear o inicializar package.json
Ve a la carpeta de tu proyecto en la terminal:
bash
Copiar código
cd ruta/de/tu/proyecto
Ejecuta el comando para inicializar el proyecto con NPM:
bash
Copiar código
npm init -y
Esto creará un archivo package.json con la configuración predeterminada.
3. Instalar http-server
http-server es un servidor HTTP simple para servir tus archivos de forma local.

a) Instalar http-server globalmente
En la terminal, ejecuta el siguiente comando para instalar http-server globalmente en tu sistema:
bash
Copiar código
npm install -g http-server
4. Ejecutar el Proyecto Localmente
a) Preparar los archivos
Asegúrate de que todos los archivos HTML, CSS, y JavaScript estén en la carpeta principal de tu proyecto o en las subcarpetas adecuadas.
b) Iniciar el servidor
En la terminal, navega a la carpeta raíz de tu proyecto donde se encuentran los archivos que deseas servir:
bash
Copiar código
cd ruta/de/tu/proyecto
Ejecuta el siguiente comando para iniciar el servidor:
bash
Copiar código
http-server
5. Acceder al Proyecto en el Navegador
Una vez que el servidor esté ejecutándose, verás un mensaje en la terminal que muestra la URL donde tu proyecto está siendo servido, generalmente algo como:

bash
Copiar código
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.1.2:8080
Hit CTRL-C to stop the server
Abre un navegador web y ve a http://localhost:8080 (o la dirección IP indicada en la terminal) para ver tu proyecto ejecutándose localmente.
6. Detener el Servidor
Cuando quieras detener el servidor, vuelve a la terminal donde está corriendo http-server y presiona CTRL+C.


## Tecnologías
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
 
