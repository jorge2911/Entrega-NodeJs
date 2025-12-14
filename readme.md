Proyecto Node.js – Descripción General - Alumno: Jorge Vitale

Este proyecto es una aplicación desarrollada con Node.js y Express, utiliza Firebase Firestore como base de datos, autenticación con JWT y middleware para proteger rutas. Está desplegada en Vercel y funciona tanto en entorno local como productivo y fue creada con fines educativos para aprender conceptos fundamentales del curso de Back-End de Talento-Tech

UTecnologías utilizadas
- Node.js
- Express
- Firebase Firestore
- JSON Web Tokens (JWT)
- dotenv
- cors
- Vercel (deploy)

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
localhost:3000
Autenticación
- El login es público.
- Al autenticarse correctamente se genera un **token JWT**.
- Las rutas de productos requieren el envío del token en el header:
Authorization: Bearer <token>
POST /api/login
GET /api/products
GET /api/products/id
POST /api/products/create
PUT /api/products/id
DELETE /api/products/id

VERCEL
https://entrega-node-js-gmol.vercel.app
POST https://entrega-node-js-gmol.vercel.app/api/login
GET https://entrega-node-js-gmol.vercel.app/api/products
GET https://entrega-node-js-gmol.vercel.app/api/products/ID
POST https://entrega-node-js-gmol.vercel.app/api/products/create
PUT https://entrega-node-js-gmol.vercel.app/api/products/ID
DELETE https://entrega-node-js-gmol.vercel.app/api/products/ID

