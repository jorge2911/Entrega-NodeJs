
import jwt from 'jsonwebtoken';
const secret_key = "saldkj289sad21ml";

// Middleware para verificar el token JWT
export const authentication = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    // Verificar si el header existe
    if (!authHeader) {
        return res.status(401).json({ error: "Token no enviado" });
    }

    // Verificar que comience con "Bearer "
    if (!authHeader.startsWith("Bearer ")) {
        return res.status(400).json({ error: "Formato de token inválido" });
    }

    // Extraer el token
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Token vacío o inválido" });
    }

    // Verificar el token JWT
    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
            return res.status(403).json({ error: "Token inválido o expirado" });
        }

        // Guardamos los datos del usuario en la request (útil después)
        req.user = decoded;
        next();
    });
};