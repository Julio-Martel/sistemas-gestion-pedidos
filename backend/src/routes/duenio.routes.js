import express from 'express';
import { autenticarToken } from '../middlewares/auth.token.js';


const duenioRoutes = express.Router();

duenioRoutes.post('tiendas/crear',autenticarToken /**/);



export default duenioRoutes;
