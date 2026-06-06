import db from '../config/db.js';

const verificarEmail = async(email) => {
    const [resultado] = await db.query(`SELECT email FROM Usuarios 
        WHERE email = ?`,[email]);

    return resultado;
}

const totalUsuarios = async() => {
    const [resultado] = await db.query(`SELECT COUNT(*) AS cantidad FROM Usuarios `);

    return resultado[0].cantidad;
}

export {
    verificarEmail,
    totalUsuarios
};