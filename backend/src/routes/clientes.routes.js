import express from 'express';
import { verProductos } from '../services/cliente.service.js';
import { autenticarToken } from '../middlewares/auth.token.js';
import { permisos } from '../middlewares/auth.permisos.js';

const clientesRoutes = express.Router();

clientesRoutes.get(autenticarToken);

export default clientesRoutes;