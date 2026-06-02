import express from 'express';
import loginRouter from './routes/login.routes.js';

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/register', );
app.use('/cliente', );
app.use('/duenio', );

export default app;