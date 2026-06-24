const permisoCliente = (req,res,next) => {
    if(req.usuario.rol !== 'cliente'){
        return res.status(403).json({
            mensaje: '403 Forbidden'
        })
    }
    
    next()
}

const permisoDuenio = (req,res,next) => {
    if(req.usuario.rol !== 'duenio'){
        return res.status(403).json({
            mensaje: '403 Forbidden'
        })
    }
    
    next()
}


export {
    permisoCliente,
    permisoDuenio
};