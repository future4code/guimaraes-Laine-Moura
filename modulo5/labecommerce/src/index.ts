import connection from './connection';
import app from './app';
import { Request, Response } from 'express';
// import {createUser} from './endpoints/createUser'

app.post("/users", createUser);

app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé! 👣");
});
