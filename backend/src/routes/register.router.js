import express from 'express';
import { registerController } from '../controllers/register.controller.js';

const registerRouter = express.Router();

registerRouter.post();

export {
    registerRouter
};