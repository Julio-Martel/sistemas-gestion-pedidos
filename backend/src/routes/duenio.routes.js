import express from 'express';
import { autenticarToken } from '../middlewares/auth.token.js';
import { permisoDuenio } from '../middlewares/auth.permisos.js';
import { crearTienda, obtenerTiendas } from '../controllers/duenio.controller.js';

const duenioRoutes = express.Router();

duenioRoutes.post('/tienda/crear',autenticarToken, permisoDuenio, crearTienda);
duenioRoutes.get('/tiendas', autenticarToken, permisoDuenio,obtenerTiendas);
duenioRoutes.get('/tiendas/:id', autenticarToken, permisoDuenio, /*HANDLER FILTRADO DE TIENDAS POR ID*/);

export default duenioRoutes;
