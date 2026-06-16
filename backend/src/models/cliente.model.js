import db from '../config/db.js';

const getProductos = async() => {
    const [resultados] = await db.query(`SELECT * FROM Productos`);

    return resultados;
}


export {
    getProductos
}