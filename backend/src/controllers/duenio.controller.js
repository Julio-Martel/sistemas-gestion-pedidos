const crearTienda = async(req,res) => {
    if(!req.body || Object.keys(req.body).length === 0){
        return res.send('No se acepta el body vacio')
    }    
} 



export {
    crearTienda
}