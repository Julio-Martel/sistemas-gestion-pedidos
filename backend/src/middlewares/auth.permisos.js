const permisoCliente = (req,res,next) => {
    if(req.usuario.rol !== 'cliente'){
        return res.status.json({
            mensaje: '403 Forbidden'
        })
    }
    
    next()
}

export {
    permisoCliente
};