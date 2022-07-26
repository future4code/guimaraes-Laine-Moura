import connection from './data/BaseDatabase';
import app from './app';
import { Request, Response } from 'express';

app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé!");
});
