import db from '../config/db.js';

const getProductos = async() => {
    const [resultados] = await db.query(`SELECT * FROM Productos`);

    return resultados;
}

const getCliente = async(id_cliente) => {
    const [resultados] = await db.query(`SELECT * FROM Usuarios 
        WHERE id = ?`, [id_cliente]);

    return resultados;
}

const getTienda = async(id_tienda) => {
    const [resultados] = await db.query(`SELECT * FROM Tiendas 
        WHERE id = ?`,[id_tienda]);

    return resultados;
}

const createPedido = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Pedidos(fechaHora, id_cliente, id_tienda)
        VALUES(?,?,?)`,[data.fechaHora, data.id_cliente, data.id_tienda]);

    return resultado;
}



export {
    getProductos,
    createPedido,
    getCliente,
    getTienda
}