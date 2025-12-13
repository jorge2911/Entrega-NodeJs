import express from "express"
import cors from "cors"
import { configDotenv } from "dotenv"
configDotenv();
import rutasProductos from "./src/routes/products.routes.js"
import rutasLog from "./src/routes/auth.routes.js"
import { authentication } from "./src/middleware/authentication.js"

const app = express();

const PORT = process.env.PORT || 3000;
const corsConfig = {
    origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

app.use(cors(corsConfig))
app.use(express.json())

// =========================
// RUTAS PÚBLICAS
// =========================
app.use("/api", rutasLog)
//app.use(authentication);


// =========================
// MIDDLEWARE de LOGIN
// =========================
app.use((req, res, next) => {
    console.log(`Datos received at:  ${req.method} ${req.url}`);
    next();
});

// =========================
// RUTAS PROTEGIDAS products
// =========================
app.use("/api", authentication, rutasProductos);

// =========================
// MANEJO 404
// =========================
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
});

// =========================
// INICIO DEL SERVIDOR
// =========================
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})

export default app;