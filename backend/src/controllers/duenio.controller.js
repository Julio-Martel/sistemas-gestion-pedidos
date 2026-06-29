import { generacionDeTienda, obtenerTodasLasTiendas, obtenerTiendaFiltrada, generacionDeProducto} from "../services/duenio.service.js"

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
        const {id_tienda} = req.params;
        const tiendaFiltrada = await obtenerTiendaFiltrada(id_tienda, req.usuario.id);

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

const crearProducto = async(req,res) => {

    try {
      const producto = await generacionDeProducto(req.body);
    
      res.status(200).json({
        mensaje: 'Producto creado con exito!',
        producto: producto
      })

    } catch(error){
        if(error.message === 'INGRESE EL NOMBRE'){
            return res.status(403).json({
                mensaje: 'Falta el nombre'
            })
        }

        if(error.message === 'INGRESE LA DESCRIPCION'){
            return res.status(403).json({
                mensaje: 'Falta la descripcion'
            })
        }

        if(error.message === 'INGRESE EL TIPO'){
            return res.status(403).json({
                mensaje: 'Falta el tipo de producto'
            })
        }

        if(error.message === 'INGRESE ID DE TIENDA'){
            return res.status(403).json({
                mensaje: 'Falta el id de tienda'
            })
        }

        if(error.message === 'TIENDA NO EXISTENTE'){
            return res.status(403).json({
                mensaje: 'La tienda no existe'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            error: error
        });
    }
}

export {
    crearTienda,
    obtenerTiendas,
    filtrarTiendas,
    crearProducto
}
