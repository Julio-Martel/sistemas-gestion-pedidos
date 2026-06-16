import express from 'express';
import { verProductos } from '../controllers/cliente.controller.js';
import { autenticarToken } from '../middlewares/auth.token.js';
import { permisoCliente } from '../middlewares/auth.permisos.js';

const clientesRoutes = express.Router();

clientesRoutes.get('/productos', autenticarToken, permisoCliente, verProductos);
clientesRoutes.post('/pedidos/crear', autenticarToken, permisoCliente, /*AGREGAR HANDLER DE CREAR PEDIDO*/);



export default clientesRoutes;