import express from 'express';
import loginRouter from './routes/login.routes.js';
import { registerRouter } from './routes/register.router.js';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/register', registerRouter);
/*app.use('/cliente', );
app.use('/duenio', );*/

export default app;