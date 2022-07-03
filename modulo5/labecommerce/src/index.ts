import connection from './connection';
import app from './app';
import { Request, Response } from 'express';
import { createUser } from './endpoints/createUser'
import { deleteUser } from './endpoints/deleteUser';
import { getUsers } from    './endpoints/getUsers'
import { createProduct } from './endpoints/createProduct';
import { getProducts } from './endpoints/getProducts';


//Users endpoints
app.post("/users", createUser);
app.delete("/users/:id", deleteUser);
app.get("/users", getUsers)

//Products endpoints
app.post("/products", createProduct)
app.get("/products", getProducts)



app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé! 👣");
});
