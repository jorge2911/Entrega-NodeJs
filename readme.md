Proyecto Node.js – Descripción General - Alumno: Jorge Vitale

Este proyecto es una aplicación desarrollada en Node.js, creada con fines educativos para aprender conceptos fundamentales del curso de Back-End de Talento-Tech

Uso de módulos en Node.js

Manejo de rutas y servidor básico
Interacción con archivos
Uso de librerías externas
Implementación de lógica backend
Base de datos en Firebase

El archivo principal es index.js, que inicia el servidor y gestiona las rutas principales de la aplicación.
La estructura de arbol o directorios es:
/Entrega-Final/
index.js
package-lock.json
package.json
vercel.json
readme.md
.env
.gitignore
/Entrega-Final/controllers/
auth.controllers.js
products.controllers.js
/Entrega-Final/data/
data.js
token.js
/Entrega-Final/middleware/
authentication.js
/Entrega-Final/models/
products.models.js
/Entrega-Final/routes/
auth.routes.js
products.routes.js
/Entrega-Final/services/
products.services.js

Requisitos
Node.js 18 o superior
npm 

Instalar dependencias
npm install express cors jsonwebtoken dotenv 
Ejecutar en Vsc y levantar el servidor
npm start

Objetivo del proyecto
El objetivo es demostrar el funcionamiento básico de un servidor en Node.js y preparar la aplicación para ser subida a GitHub y desplegada en Vercel.
