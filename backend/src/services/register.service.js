import { verificarEmailRepetido } from "../models/register.model.js";
import { crearUsuario } from "../models/register.model.js";
import bcrypt from 'bcrypt';

const registrarUsuario = async(data) => {
    if(!data || Object.keys(data).length === 0){
        throw new Error('BODY VACIO');
    }

    if(Object.keys(data).length < 4){
        throw new Error('DEBE MANDAR TODOS LOS DATOS');
    }

    const emailDuplicado = await verificarEmailRepetido(data.email);
    
    if(emailDuplicado.length !== 0){
        throw new Error('EMAIL YA EXISTENTE');
    }

    const hashedPass = await bcrypt.hash(data.pass,10);

    const nuevoUsuario = await crearUsuario(data,hashedPass);

    return nuevoUsuario;
}

export {
    registrarUsuario
}