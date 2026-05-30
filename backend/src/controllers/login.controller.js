import { logearUsuario } from '../services/login.service.js';

const login = async(req,res) => {
    try{
        const {email,pass} = req.body;

        const usuarioLogeado = await logearUsuario(email,pass);

        res.status(200).json({
            mensaje: 'Logeado con exito!'
        });

    } catch(error){

        res.status(500).json({
            mensaje: 'ERROR DEL SERVIDOR'
        })
    
    }
}

export {login};