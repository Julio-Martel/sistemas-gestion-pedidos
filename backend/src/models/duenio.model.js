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
    const [resultado] = await db.query(`SELECT * FROM Tiendas WHERE 
        id_duenio = ?`,[id_data]);

    return resultado;
}

const getTienda = async(id_tienda, id_duenio) => {
    const [resultado] = await db.query(`SELECT * FROM Tiendas WHERE 
        id = ? AND id_duenio = ?`,[id_tienda,id_tienda]);

    return resultado;

}

const verificarTienda = async(data) => {
    const [resultado] = await db.query(`SELECT * FROM Tiendas 
        WHERE id = ?`,[data.id_tienda]);
    
    return resultado;

}

const createProducto = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Productos(nombre, descripcion, tipo, id_tienda)
        VALUES(?,?,?,?)`,
        [data.nombre, data.descripcion, data.tipo, data.id_tienda])

    return resultado;

}

const getProducto  = async(id_prod) => {
    const [resultado] = await db.query(`SELECT * FROM Productos WHERE 
        id = ?`, [id_prod]);

    return resultado;

}

const updateStock = async(id_prod, stk_prod) => {
    const [resultado] = await db.query(`UPDATE Productos 
        SET stock = ? WHERE id = ?`,[stk_prod, id_prod]);

    return resultado;
} 

const confirmPedido = async(id_pedido) => {
    const [resultado] = await db.query(`UPDATE PEDIDOS 
        SET estado = 'confirmado' 
        WHERE id = ? `,[id_pedido]);

    return resultado;
}

export {
    createTienda,
    buscarPorNombreOTelefonoDireccion,
    getTiendas,
    getTienda,
    verificarTienda,
    createProducto,
    updateStock
}

