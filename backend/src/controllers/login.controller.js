import { logearUsuario } from '../services/login.service.js';

const loginController = async(req,res) => {
    if(!req.body || Object.keys(req.body).length === 0){
        return res.send('Debe mandar algo en el body');
    }

    try{
        const {email,pass} = req.body;

        const usuarioLogeado = await logearUsuario(email,pass);

        res.status(200).json({
            mensaje: 'Logeado con exito!',
            usuario: usuarioLogeado
            
        });

    } catch(error){

        if(error.message === 'NO HAY USUARIOS'){
            res.status(404).json({
                mensaje: 'No hay usuarios en la base de datos'
            })
        }


        if(error.message === 'EMAIL NO EXISTENTE'){
            res.status(401).json({
                mensaje: 'El email no existe'
            });
        }

        if(error.message === 'DEBE INGRESAR EL MAIL Y EL PASS'){
            res.status(401).json({
                mensaje: 'Debe ingresar el email y el pass'
            })
        }

        res.status(500).json({
            mensaje: 'ERROR DEL SERVIDOR'
        })
    
    }
}

export {
    loginController
};