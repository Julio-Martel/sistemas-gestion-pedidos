import db from '../config/db.js';

const createTienda = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Tiendas(nombre,direccion,id_duenio,telefono)
        VALUES(?,?,?,?)`,
        [data.nombre, data.direccion, data.id_duenio, data.telefono]);
    
    return resultado;
}

export {
    createTienda
}