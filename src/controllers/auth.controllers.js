import { generateToken } from "../data/token.js";

export const login = async (req, res) => {
// QUITAR EL TRY Y CATCH
    try {
        console.log(req.body)   // VER DE QUITARLO ---------------------
        const { email, password } = req.body;
   
        if (!email || !password) {
            return res.status(400).json({ error: "Email y password son obligatorios" });
        }
// HASTA ACA DEJANDO LA LINEA 6 Y 7 QUITAR EL IF DE LINEA 9 Y 10
   // Validación simple 
         if (email === "test@gmail.com" && password === "123456") {
            const user = {email: email, id: "123"}
            const token = await generateToken(user);
            res.json({ token });

            return res.status(200).json({
            message: "Login exitoso",
            token,
            user
            });

        } else {
            res.sendStatus(401);
// QUITAR EL TRY Y CATCHA
        } catch (error) {
        console.error("Error en login:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
// HASTA ACA

    }
}
/*
import { generateToken } from "../data/tokentest.js";

export const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    if (email === "test@gmail.com" && password === "123456") {
        const user = {email: email, id: "123"}
        const token = await generateToken(user);
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
}
*/
