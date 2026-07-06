import { getProductos, getCliente, 
         getTienda, createPedido, getMisPedidos} from "../models/cliente.model.js"

const obtenerTodosLosProductos = async() => {
    const productos = await getProductos();

    if(productos.length === 0){
        throw new Error(`NO EXISTEN PRODUCTOS`);
    }

    return productos; 
}

const generacionDePedido = async(fechaHora,id_cliente,id_tienda) => {
    
    const cliente = await getCliente(id_cliente);
    
    const tienda = await getTienda(id_tienda);

    if(cliente.length === 0 && tienda.length === 0){
        throw new Error(`EL CLIENTE O LA TIENDA NO EXISTEN`);
    }

    const data = {
        fechaHora: fechaHora,
        id_cliente: id_cliente,
        id_tienda: id_tienda
    }

    const nuevoPedido = await createPedido(data);

    return nuevoPedido;
}

const verTodosMisPedidos = async(req,res) => {

}

export {
    obtenerTodosLosProductos,
    generacionDePedido,
    verTodosMisPedidos    
}