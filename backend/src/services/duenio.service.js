import { createTienda, buscarPorNombreOTelefonoDireccion, getTiendas, getTienda} from "../models/duenio.model.js";

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
    
}

export {
    generacionDeTienda,
    obtenerTodasLasTiendas,
    obtenerTiendaFiltrada
}

