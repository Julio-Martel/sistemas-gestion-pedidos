import { generacionDeTienda } from "../services/duenio.service.js"

const crearTienda = async(req,res) => {
    
    if(!req.body || Object.keys(req.body).length === 0){
        return res.send('No se acepta el body vacio')
    }    

    try {
      const tienda = await generacionDeTienda(req.body);
   
   
   
    } catch(error){
        
        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            err: error
        })
    }
} 



export {
    crearTienda
}