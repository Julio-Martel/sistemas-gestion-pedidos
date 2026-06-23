import { createTienda, verificarTiendaConTelefonoONombre } from "../models/duenio.model.js";

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
  
    const tiendaExistente = await verificarTiendaConTelefonoONombre(data.nombre, data.telefono);

    if(tiendaExistente){
        throw new Error(`Tienda ya existente`);
    }

    const resultado = await createTienda(data);
 
    return resultado;
}

export {
    generacionDeTienda
}