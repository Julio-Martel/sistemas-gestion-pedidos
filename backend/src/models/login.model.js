import db from '../config/db.js';

const verificarEmail = async(email) => {
    const [resultado] = await db.query(`SELECT * FROM Usuarios 
        WHERE email = ?`,[email]);


        /*encontrar aqui el error*/

        console.log('ahhh: ',resultado.pass)

    return [resultado];
}

const totalUsuarios = async() => {
    const [resultado] = await db.query(`SELECT COUNT(*) AS cantidad FROM Usuarios `);

    return resultado[0].cantidad;
}

export {
    verificarEmail,
    totalUsuarios
};