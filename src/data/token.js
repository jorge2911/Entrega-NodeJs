import jwt from 'jsonwebtoken';
import 'dotenv/config';

//   Clave secreta desde el archivo  .env
const secret_key = process.env.JWT_SECRET_KEY; // "saldkj289sad21ml" Hardcodeada
// console.log(secret_key)

// Verifica si la clave existe en el archivo .env
if (!secret_key) {
  throw new Error("Falta definir JWT_SECRET_KEY en el archivo .env");
}

export const generateToken = (userData) => {
  const user = {id: userData.id, email: userData.email};
  const expiration = { expiresIn: '1h' };
  return jwt.sign(user, secret_key, expiration);
}

//const token = generateToken({id: "1", email: "test@gmail.com"})
//console.log(token)