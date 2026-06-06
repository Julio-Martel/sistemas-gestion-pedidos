import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { verificarEmail } from '../models/login.model.js';
import { totalUsuarios } from '../models/login.model.js';

const logearUsuario = async(email,pass) => {

    if(!email || !pass){
         throw new Error('DEBE INGRESAR EL MAIL Y EL PASS');
    }

    const cantidadUsuarios = await totalUsuarios();

    if(cantidadUsuarios === 0){
        throw new Error('NO HAY USUARIOS');
    }

    const comprobarEmail = await verificarEmail(email);

    if(comprobarEmail === undefined){
        throw new Error('EMAIL NO EXISTENTE');
    }

    const comprobarPassword =  await bcrypt.compare(pass,comprobarEmail.pass);

    if(!comprobarPassword){
        throw new Error('PASSWORD INCORRECTO');
    }

    const token = jwt.sign(
        { id: comprobarEmail.id,
          rol: comprobarEmail.rol,
          pass: comprobarEmail.pass
        },
        'secreto',
        {expiresIn: '1h'}
    )

    return token;
}

export {
    logearUsuario
};