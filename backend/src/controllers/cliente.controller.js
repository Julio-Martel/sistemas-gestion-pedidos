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
        req.send('No ha ingresado nada en el body');
    }
        
    const {fechaHora, id_cliente, id_tienda} = req.body;
    
    if(!fechaHora || !id_cliente || !id_tienda){
        req.send('Se deben mandar todos los datos');
    }

    try {
        const pedido = await generacionDePedido(req.body);




    } catch(error){

    }
}


export {
    verProductos,
    crearPedido
} 