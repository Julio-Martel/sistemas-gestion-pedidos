import db from '../config/db.js';

const verificarEmailRepetido = async(email) => {
    const [resultado] = await db.query(
        `SELECT email FROM Usuarios 
         WHERE email = ?`,[email]
    );
    
    return resultado;
}

const crearUsuario = async (data, hash) => {
    const [resultado] = await db.query(
        `INSERT INTO Usuarios(nombre,email,pass,rol)
         VALUES(?,?,?,?)`,
        [data.nombre, data.email, hash, data.rol]
    );

    return resultado;
}


export {
    verificarEmailRepetido,
    crearUsuario
}
