import connection from './connection';
import app from './app';
import { Request, Response } from 'express';
import { createUser } from './endpoints/createUser'
import { deleteUser } from './endpoints/deleteUser';
import { getUsers } from    './endpoints/getUsers'

app.post("/users", createUser);
app.delete("/users/:id", deleteUser);
app.get("/users", getUsers);



app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé! 👣");
});
