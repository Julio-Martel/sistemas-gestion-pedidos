import express from 'express';
import { autenticarToken } from '../middlewares/auth.token.js';
import { permisoDuenio } from '../middlewares/auth.permisos.js';
import { crearTienda, obtenerTiendas, filtrarTiendas, crearProducto, modificarStockProducto } from '../controllers/duenio.controller.js';

const duenioRoutes = express.Router();

duenioRoutes.post('/tienda/crear',autenticarToken, permisoDuenio, crearTienda);
duenioRoutes.get('/tiendas', autenticarToken, permisoDuenio, obtenerTiendas);
duenioRoutes.get('/tiendas/:id', autenticarToken, permisoDuenio, filtrarTiendas);
duenioRoutes.post('/productos/crear', autenticarToken, permisoDuenio, crearProducto);
duenioRoutes.post('/productos/modificar/:id', autenticarToken, permisoDuenio, modificarStockProducto);
duenioRoutes.post('/productos', autenticarToken, permisoDuenio, /*AGREGAR HANDLER DE VER TODOS SUS PRODUCTOS*/);


export default duenioRoutes;
