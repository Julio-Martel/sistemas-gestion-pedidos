import { getProductos, getCliente, 
         getTienda, createPedido, getMisPedidos, getProducto} from "../models/cliente.model.js"

const obtenerTodosLosProductos = async() => {
    const productos = await getProductos();

    if(productos.length === 0){
        throw new Error(`NO EXISTEN PRODUCTOS`);
    }

    return productos; 
}

const generacionDePedido = async(fechaHora,id_cliente,id_tienda, id_producto) => {
    
    const cliente = await getCliente(id_cliente);
    
    const tienda = await getTienda(id_tienda);

    const producto = await getProducto(id_producto);

    if(cliente === undefined && tienda === undefined &&  producto === undefined){
        throw new Error(`EL CLIENTE O LA TIENDA O PRODUCTO NO EXISTEN`);
    }

    const data = {
        fechaHora: fechaHora,
        id_cliente: id_cliente,
        id_tienda: id_tienda,
        id_producto: id_producto
    }

    const nuevoPedido = await createPedido(data);

    return nuevoPedido;
}

const verTodosMisPedidos = async(id_cliente) => {
    const pedidos = await getMisPedidos(id_cliente);

    if(pedidos.length === 0){
        throw new Error(`NO TIENES PEDIDOS EN ESTE MOMENTO`);
    }

    return pedidos;
}

export {
    obtenerTodosLosProductos,
    generacionDePedido,
    verTodosMisPedidos    
}