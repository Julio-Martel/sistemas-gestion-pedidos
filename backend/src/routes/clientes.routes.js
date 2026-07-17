import express from 'express';
import { verProductos, crearPedido, verMisPedidos, cancelarPedido, filtrarProducto } from '../controllers/cliente.controller.js';
import { autenticarToken } from '../middlewares/auth.token.js';
import { permisoCliente } from '../middlewares/auth.permisos.js';

const clientesRoutes = express.Router();

// VER TODOS LOS PRODUCTOS
clientesRoutes.get('/productos', autenticarToken, permisoCliente, verProductos);

// FILTRAR POR ID DE PRODUCTO
clientesRoutes.get('productos/:id', autenticarToken, permisoCliente, filtrarProducto);

// CREAR PEDIDO
clientesRoutes.post('/pedidos/crear', autenticarToken, permisoCliente, crearPedido);

//VER SUS PEDIDOS
clientesRoutes.get('/pedidos/ver', autenticarToken, permisoCliente, verMisPedidos);

//CANCELAR PEDIDOS
clientesRoutes.patch('/pedidos/cancelar/:id', autenticarToken, permisoCliente, cancelarPedido);

export default clientesRoutes;