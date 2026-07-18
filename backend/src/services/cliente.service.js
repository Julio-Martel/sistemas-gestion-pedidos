import { getProductos, getCliente, 
         getTienda, createPedido, 
         getMisPedidos, getProducto, 
         cancelPedido, getProductosTipo} from "../models/cliente.model.js"

const obtenerTodosLosProductos = async(tipo) => {
    let productos;

    if(tipo){
       productos = await getProductos(tipo); 
    }

    if(productos.length === 0){
        throw new Error(`NO EXISTEN PRODUCTOS O DE ESA CATEGORIA`);
    }

    return productos; 
}

const filtradoProducto = async(id_producto) => {
    const productoFiltrado = await getProducto(id_producto);

    if(productoFiltrado === undefined){
        throw new Error(`PRODUCTO INEXISTENTE`);
    }

    return productoFiltrado;
}

const generacionDePedido = async(fechaHora,id_cliente,id_tienda, id_producto) => {
    
    const fechaTurno = new Date(fechaHora);
    const fechaActual = new Date();

    if(fechaTurno < fechaActual){
        throw new Error(`DEBE SER UNA FECHA MAYOR`);
    }

    const cliente = await getCliente(id_cliente);
    
    const tienda = await getTienda(id_tienda);

    const producto = await getProducto(id_producto);
    console.log(producto)

    if(cliente === undefined && tienda === undefined &&  producto === undefined){
        throw new Error(`EL CLIENTE O LA TIENDA O PRODUCTO NO EXISTEN`);
    }

    const data = {
        fechaHora: fechaHora,
        id_cliente: id_cliente,
        id_tienda: id_tienda,
        id_producto: id_producto,
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

const cancelarElPedido = async(id_pedido, id_cliente) => {
    const pedidoCancelado = await cancelPedido(id_pedido, id_cliente);
    
    if(pedidoCancelado.affectedRows === 0){
        throw new Error('NO SE PUDO CANCELAR PEDIDO');
    }

    return pedidoCancelado;
}

export {
    obtenerTodosLosProductos,
    generacionDePedido,
    verTodosMisPedidos,
    cancelarElPedido,
    filtradoProducto
}