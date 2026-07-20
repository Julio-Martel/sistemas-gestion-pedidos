import { createTienda, buscarPorNombreOTelefonoDireccion, 
    getTiendas, getTienda, verificarTienda, 
    createProducto, updateStock} from "../models/duenio.model.js";

const generacionDeTienda = async(data) => {
    if(!data.nombre){
        throw new Error(`Nombre requerido`);
    }
  
    if(!data.direccion){
        throw new Error(`Direccion requerida`);
    }
        
    if(!data.telefono){
        throw new Error(`Telefono requerido`);
    }
  
    const tiendaExistente = await buscarPorNombreOTelefonoDireccion(data.nombre, data.telefono, data.direccion);

    if(tiendaExistente === null){
        throw new Error(`Tienda ya existente`);
    }

    const resultado = await createTienda(data);
 
    return resultado;
}

const obtenerTodasLasTiendas  = async(id_usuario) => {

    const tiendas = await getTiendas(id_usuario);

    if(tiendas.length === 0){
        throw new Error(`NO HAY TIENDAS SUYAS`);
    }

    return tiendas;
}

const obtenerTiendaFiltrada = async(id_tienda,id_usuario) => {

    let filtrado;

    if(!id_tienda){
        const tiendas = await getTiendas(id_usuario);

        if(tiendas.length === 0){
            throw new Error('NO HAY TIENDAS SUYAS')
        }

        filtrado = tiendas;

    } else {
        const tiendaFiltrada = await getTienda(id_tienda, id_usuario);

        if(tiendaFiltrada.length === 0){
            throw new Error('NO EXISTE ID DE TIENDA')
        }

        filtrado = tiendaFiltrada;
    }

    return filtrado;
}

const generacionDeProducto = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error(`BODY VACIO`);
    }

    if(!data.nombre){
        throw new Error(`INGRESE EL NOMBRE`)
    }

    if(!data.descripcion){
        throw new Error(`INGRESE LA DESCRIPCION`)
    }

    if(!data.tipo){
        throw new Error(`INGRESE EL TIPO`)
    }

    if(!data.id_tienda){
        throw new error(`INGRESE ID DE TIENDA`)
    }

    const tiendaExistente = await verificarTienda(data.id_tienda);

    if(tiendaExistente === null){
        throw new Error(`TIENDA NO EXISTENTE`);
    }

    const productoNuevo = await createProducto(data);

    return productoNuevo;
}

const modificacionStockProducto = async(id_prod, stk_prod) => {
    const modificacion =  await updateStock(id_prod, stk_prod);

    if(modificacion.affectedRows !== 1){
        throw new Error(`No existe el id o el stock es inferior a 0`);
    }

    return modificacion;

}

const confirmacionDelPedido = async(id_prod) => {

}



export {
    generacionDeTienda,
    obtenerTodasLasTiendas,
    obtenerTiendaFiltrada,
    generacionDeProducto,
    modificacionStockProducto,
    confirmacionDelPedido

}

