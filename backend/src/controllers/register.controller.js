import { registrarUsuario } from "../services/register.service.js";

const registerController = async(req,res) => {
    try{
        
        const usuarioRegistrado = await registrarUsuario(req.body);

        res.status(200).json({
            mensaje: 'USUARIO CREADO CON EXITO!'
        })

    } catch(error){
        if(error.message === 'BODY VACIO'){
            return res.send('El body esta vacio debe mandar los datos');
        }
    
        if(error.message === 'DEBE MANDAR TODOS LOS DATOS'){
            return res.send('Se necesita enviar todos los datos, email, nombre, pass y el rol')
        }
    
        if(error.message === 'EMAIL YA EXISTENTE'){
            return res.send('El email ya esta en uso');
        }

        res.status(500).json({
            mensaje: 'ERROR DEL SERVIDOR'
        })
    }
}

export {registerController};