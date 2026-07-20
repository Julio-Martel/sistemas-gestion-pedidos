import express from 'express';
import { autenticarToken } from '../middlewares/auth.token.js';
import { permisoDuenio } from '../middlewares/auth.permisos.js';
import { crearTienda, obtenerTiendas, filtrarTiendas, 
    crearProducto, modificarStockProducto } from '../controllers/duenio.controller.js';

const duenioRoutes = express.Router();

//CREAR TIENDAS
duenioRoutes.post('/tienda/crear',autenticarToken, permisoDuenio, crearTienda);

//OBTENER TIENDAS
duenioRoutes.get('/tiendas', autenticarToken, permisoDuenio, obtenerTiendas);

//FILTRAR TIENDAS
duenioRoutes.get('/tiendas/:id', autenticarToken, permisoDuenio, filtrarTiendas);

//CREAR PRODUCTOS
duenioRoutes.post('/productos/crear', autenticarToken, permisoDuenio, crearProducto);

//MODIFICACION DE STOCK
duenioRoutes.post('/productos/modificar/:id', autenticarToken, permisoDuenio, modificarStockProducto);

export default duenioRoutes;
