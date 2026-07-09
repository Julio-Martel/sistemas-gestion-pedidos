import express from 'express';
import { verProductos, crearPedido, verMisPedidos } from '../controllers/cliente.controller.js';
import { autenticarToken } from '../middlewares/auth.token.js';
import { permisoCliente } from '../middlewares/auth.permisos.js';

const clientesRoutes = express.Router();

// VER TODOS LOS PRODUCTOS
clientesRoutes.get('/productos', autenticarToken, permisoCliente, verProductos);

// CREAR PEDIDO
clientesRoutes.post('/pedidos/crear', autenticarToken, permisoCliente, crearPedido);

//VER SUS PEDIDOS
clientesRoutes.get('/pedidos/ver', autenticarToken, permisoCliente, verMisPedidos);

/* AVERIGUAR PORQUE AL QUERER CREAR UN PEDIDO
SALE TOKEN INVALIDO */


export default clientesRoutes;