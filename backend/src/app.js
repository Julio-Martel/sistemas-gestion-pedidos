import express from 'express';
import loginRouter from './routes/login.routes.js';
import registerRouter from './routes/register.router.js';
import clientesRoutes from './routes/clientes.routes.js';
import duenioRoutes from './routes/duenio.routes.js';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/cliente', clientesRoutes);
app.use('/duenio', duenioRoutes);

export default app;