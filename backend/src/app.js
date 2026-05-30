import express from 'express';

const app = express();

app.use(express.json());

app.use('/login', );
app.use('/register', );
app.use('/cliente', );
app.use('/duenio', );

export default app;