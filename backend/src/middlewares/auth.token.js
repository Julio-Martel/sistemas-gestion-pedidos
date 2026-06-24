import jwt from 'jsonwebtoken';

const autenticarToken = async(req,res,next) => {
    const headerToken = req.headers.authorization;

    if(!headerToken){
        return res.send('No hay token')
    }

    const ht = headerToken.split(' ')[1];

    try{
        const decoded = jwt.verify(ht,'secreto');

        req.usuario = decoded;

        next();

    } catch(error){
        res.status(403).json({ mensaje: 'Token inválido' });
    }
}

export {autenticarToken};
