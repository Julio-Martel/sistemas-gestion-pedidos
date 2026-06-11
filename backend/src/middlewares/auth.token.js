import bcrypt from 'bcrypt';

const autenticarToken = async(req,res,next) => {
    const headerToken = req.headers.authorization;

    if(!headerToken){
        return res.send('No hay token')
    }

    const ht = headerToken.split(' ')[1];

    try{
        const decoded = await bcrypt.compare(ht,'secreto');

        req.usuario = decoded;

        next();

    } catch(error){
        res.status(403).json({ mensaje: 'Token inválido' });
    }
}

export {autenticarToken};
