import dotenv from 'dotenv';

dotenv.config();

import './database';

import express from 'express';

import userRoutes from './routes/userRoutes';
import categoryRoutes from './routes/categoryRoutes';
import productRoutes from './routes/productRoutes';


class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/categories/', categoryRoutes);
        this.app.use('/users/', userRoutes);
        this.app.use('/products', productRoutes);
    }
}

export default new App().app;

