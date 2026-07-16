import db from '../config/db.js';

const getProductos = async() => {
    const [resultados] = await db.query(`SELECT * FROM Productos`);

    return resultados;
}

const getCliente = async(id_cliente) => {
    const [resultados] = await db.query(`SELECT * FROM Usuarios 
        WHERE id = ?`, [id_cliente]);

    return resultados[0];
}

const getTienda = async(id_tienda) => {
    const [resultados] = await db.query(`SELECT * FROM Tiendas 
        WHERE id = ?`,[id_tienda]);

    return resultados[0];
}

const createPedido = async(data) => {
    const [resultado] = await db.query(`INSERT INTO Pedidos(fecha_hora, id_cliente, id_tienda, id_producto)
        VALUES(?,?,?,?)`,[data.fechaHora, data.id_cliente, data.id_tienda, data.id_producto]);

    return resultado;
}

const getMisPedidos = async(id_cliente) => {
    const [resultados] = await db.query(`SELECT * FROM Pedidos 
        WHERE id_cliente = ?`, [id_cliente]);

    return resultados;
}

const getProducto = async(id_producto) => {
    const [resultado] = await db.query(`SELECT * FROM Productos 
        WHERE id = ?`, [id_producto]);

    return resultado[0];
}

const cancelPedido = async(id_pedido, id_cliente) => {
    const [resultado] = await db.query(`UPDATE Pedidos 
        SET estado = 'cancelado' 
        WHERE id = ? AND id_cliente = ? AND estado = ?`
        ,[id_pedido, id_cliente, 'pendiente']);

    return resultado;
}

export {
    getProductos,
    createPedido,
    getCliente,
    getTienda,
    getMisPedidos,
    getProducto,
    cancelPedido
}