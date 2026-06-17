import { getProductos } from "../models/cliente.model.js"

const obtenerTodosLosProductos = async() => {
    const productos = await getProductos();

    if(productos.length === 0){
        throw new Error(`NO EXISTEN PRODUCTOS`);
    }

    return productos; 
}

const generacionDePedido = async() => {

}



export {
    obtenerTodosLosProductos,
    generacionDePedido    
}