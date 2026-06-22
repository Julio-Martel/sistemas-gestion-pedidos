import { createTienda } from "../models/duenio.model.js";

const generacionDeTienda = async(data) => {
  const crearTienda = await createTienda(data);
 
/*
    VER EL TEMA DE LOS UNIQUE PARA PODER AGREGARLO A LA TABLA EN SQL


*/

}

export {
    generacionDeTienda
}