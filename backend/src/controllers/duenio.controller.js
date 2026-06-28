import { generacionDeTienda, obtenerTodasLasTiendas, obtenerTiendaFiltrada} from "../services/duenio.service.js"

const crearTienda = async(req,res) => {
    
    if(!req.body || Object.keys(req.body).length === 0){
        return res.status(400).json({
            mensaje: 'No se acepta el body vacio'
        })
    }    

    try {
      const tienda = await generacionDeTienda(req.body);
   
      res.status(201).json({
        mensaje: 'Tienda creada con exito!'
      })
   
    } catch(error){
        if(error.message === 'Nombre requerido'){
            return res.status(400).json({
                mensaje: 'Nombre requerido'
            })
        }

        if(error.message === 'Direccion requerida'){
            return res.status(400).json({
                mensaje: 'Direccion requerida'
            })
        }

        if(error.message === 'Telefono requerido'){
            return res.status(400).json({
                mensaje: 'Telefono requerido'
            })
        }

        if(error.message === 'Tienda ya existente'){
            return res.status(400).json({
                mensaje: 'Tienda ya existente'
            })
        }
        
        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            error: error
        })
    }
} 

const obtenerTiendas = async(req,res) => {
    try {
      const tiendas  = await obtenerTodasLasTiendas(req.usuario.id) 
        
      res.status(200).json({
        mensaje: 'Todas sus tiendas',
        tiendas: tiendas
      })
       
    } catch(error){
        if(error.message === 'NO HAY TIENDAS SUYAS'){
            return res.status(404).json({
                mensaje: 'No se encontraron tiendas suyas'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            error: error
        })
    }
}

const filtrarTiendas = async(req,res) => {
    try {
        const tiendaFiltrada = await obtenerTiendaFiltrada(req.params, req.usuario.id);

       res.status(200).json({
         mensaje: 'Resultado/s: ',
         tiendaFiltrada: tiendaFiltrada
       })

    } catch(error){
        if(error.message === 'NO HAY TIENDAS SUYAS'){
           return res.status(404).json({
              mensaje: 'No hay tiendas suyas'
           }) 
        }

        if(error.message === 'NO EXISTE ID DE TIENDA'){
          return res.status(403).json({
            mensaje: 'No existe ese ID'
          })
        }
        
        res.status(500).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

export {
    crearTienda,
    obtenerTiendas,
    filtrarTiendas
}
