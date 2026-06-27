import db from '../config/db.js';

const createTienda = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Tiendas(nombre,direccion,id_duenio,telefono)
        VALUES(?,?,?,?)`,
        [data.nombre, data.direccion, data.id_duenio, data.telefono]);
    
    return resultado;
}

const buscarPorNombreOTelefonoDireccion = async(nombre, telefono, direccion) => {
    const [resultado] = await db.query(`SELECT 1 FROM Tiendas WHERE nombre = ? AND telefono = ? AND direccion = ? LIMIT 1`
        ,[nombre, telefono, direccion]);

    return resultado;
}

const getTiendas = async(id_data) => {
    const [resultado] = await db.query(`SELECT * FROM Tiendas WHERE id_duenio = ?`,[id_data]);

    return resultado;
}


export {
    createTienda,
    buscarPorNombreOTelefonoDireccion,
    getTiendas
}

