import { obtenerTodosLosProductos } from "../services/cliente.service.js"

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

export {
    verProductos
} 