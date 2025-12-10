import { generateToken } from "../data/token.js";

export const login = async (req, res) => {

        console.log(req.body)   // VER DE QUITARLO ---------------------
        const { email, password } = req.body;
   
        if (!email || !password) {
            return res.status(400).json({ error: "Email y password son obligatorios" });
        }
   // Validación simple 
         if (email === "test@gmail.com" && password === "123456") {
            const user = {email: email, id: "123"}
            const token = await generateToken(user);
 //           res.json({ token });

            return res.status(200).json({
            message: "Login exitoso",
            token,
            user
            });

        } else {
            res.sendStatus(401);
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
