import express from 'express';
import { autenticarToken } from '../middlewares/auth.token.js';
import { permisoDuenio } from '../middlewares/auth.permisos.js';

const duenioRoutes = express.Router();

duenioRoutes.post('tienda/crear',autenticarToken, permisoDuenio /**/);



export default duenioRoutes;
