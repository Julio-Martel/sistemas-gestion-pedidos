import express from 'express';
import { autenticarToken } from '../middlewares/auth.token.js';
import { permisoDuenio } from '../middlewares/auth.permisos.js';
import { crearTienda, obtenerTiendas, filtrarTiendas } from '../controllers/duenio.controller.js';

const duenioRoutes = express.Router();

duenioRoutes.post('/tienda/crear',autenticarToken, permisoDuenio, crearTienda);
duenioRoutes.get('/tiendas', autenticarToken, permisoDuenio, obtenerTiendas);
duenioRoutes.get('/tiendas/:id', autenticarToken, permisoDuenio, filtrarTiendas);

export default duenioRoutes;
