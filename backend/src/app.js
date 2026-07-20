import express from 'express';
import loginRouter from './routes/login.routes.js';
import registerRouter from './routes/register.router.js';
import clientesRoutes from './routes/clientes.routes.js';
import duenioRoutes from './routes/duenio.routes.js';

const app = express();

app.use(express.json());

//RUTA PARA EL LOGEO
app.use('/login', loginRouter);

//RUTA PARA EL REGISTRO
app.use('/register', registerRouter);

//RUTA DEL CLIENTE
app.use('/cliente', clientesRoutes);

//RUTA DEL DUEÑO
app.use('/duenio', duenioRoutes);

export default app;