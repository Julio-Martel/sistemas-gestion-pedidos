import { obtenerTodosLosProductos, generacionDePedido, verTodosMisPedidos } from "../services/cliente.service.js"

const verProductos = async(req,res) => {
    try{
        const todosLosProductos = await obtenerTodosLosProductos();

        res.status(200).json({
            mensaje: 'Todos los productos',
            productos: todosLosProductos
        })

    } catch(error){
        if(error.message === 'NO EXISTEN PRODUCTOS'){
            return res.status(404).json({
                mensaje: 'No hay productos en la base de datos'
            })
        }

        return res.status(500).json({
            mensaje: 'Error interno'
        });        
    }
}

const crearPedido = async(req,res) => {
    if(!req.body || Object.keys(req.body).length === 0){
        return res.send('No ha ingresado nada en el body');
    }
        
    const {fecha_hora, id_tienda, id_producto} = req.body;
    
    if(!fecha_hora || !id_tienda || !id_producto){
        return res.send('Se deben mandar todos los datos');
    } 

    try {
        const pedido = await generacionDePedido(fecha_hora,req.usuario.id,id_tienda,id_producto);

        res.status(200).json({
            mensaje: 'Su ticket: ',
            ticket: pedido
        })        

    } catch(error){

        if(error.message === 'DEBE SER UNA FECHA MAYOR'){
            return res.status(400).json({
                mensaje: 'La fecha del turno no puede ser anterior a la fecha y hora actual.'
            })
        }

        if(error.message === 'EL CLIENTE O LA TIENDA O PRODUCTO NO EXISTEN'){
            return res.status(404).json({
                mensaje: 'El cliente o la tienda o el producto no existen'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            err: error
        })
    }
}

const verMisPedidos = async(req,res) => {
    try {
        const pedidos = await verTodosMisPedidos(req.usuario.id);

        res.status(200).json({
            mensaje: 'Sus pedidos: ',
            pedidos: pedidos
        })

    } catch(error){
        if(error.message === 'NO TIENES PEDIDOS EN ESTE MOMENTO'){
            return res.status(404).json({
                mensaje: 'No hay pedidos'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO',
            error: error
        });
    }
}

const cancelarPedido = async(req,res) => {
    try{

    } catch(error){

    }
}

export {
    verProductos,
    crearPedido,
    verMisPedidos,
    cancelarPedido

} 