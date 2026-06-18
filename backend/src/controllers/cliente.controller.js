import { obtenerTodosLosProductos, generacionDePedido } from "../services/cliente.service.js"

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
        res.send('No ha ingresado nada en el body');
    }

    console.log(req.body);
        
    const {fechaHora, id_cliente, id_tienda} = req.body;
    
    if(!fechaHora || !id_cliente || !id_tienda){
        res.send('Se deben mandar todos los datos');
    }

    try {
        const pedido = await generacionDePedido(fechaHora,id_cliente,id_tienda);

        res.status(200).json({
            mensaje: 'Su ticket: ',
            ticket: pedido
        })        

    } catch(error){
        if(error.message === 'EL CLIENTE O LA TIENDA NO EXISTEN'){
            return res.status(404).json({
                mensaje: 'El cliente o la tienda no existe'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR INTERNO'
        })
    }
}

/*

    ARREGLAR ESTO 


*/

export {
    verProductos,
    crearPedido
} 