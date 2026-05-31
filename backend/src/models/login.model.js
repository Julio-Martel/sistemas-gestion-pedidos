import db from '../config/db.js';

const verificarEmail = async(email) => {
    const [resultado] = await db.query(`SELECT email FROM Usuarios 
        WHERE email = ?`,[email]);

    if(resultado.length === 0){
        throw new Error('EMAIL NO ENCONTRADO')
    };

    return resultado;
}


export {
    verificarEmail
};