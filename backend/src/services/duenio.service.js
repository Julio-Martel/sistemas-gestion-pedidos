import { createTienda, buscarPorNombreOTelefonoDireccion, getTiendas } from "../models/duenio.model.js";

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
    console.log(id_usuario);

    const tiendas = await getTiendas(id_usuario);

    if(tiendas.length === 0){
        console.log('adasdasd')
        throw new Error(`NO HAY TIENDAS SUYAS`);
    }

    return tiendas;
}

export {
    generacionDeTienda,
    obtenerTodasLasTiendas
}

