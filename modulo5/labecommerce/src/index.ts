import app from './app';
import { createUser } from './endpoints/Users/createUser'
import { deleteUser } from './endpoints/Users/deleteUser';
import { getUsers } from    './endpoints/Users/getUsers'
import { createProduct } from './endpoints/Products/createProduct';
import { getProducts } from './endpoints/Products/getProducts';
import { createPurchase } from "./endpoints/Purchases/createPurchase";
import { getPurchases } from './endpoints/Purchases/getPurchases';


//Users endpoints
app.post("/users", createUser);
app.delete("/users/:id", deleteUser);
app.get("/users", getUsers)

//Products endpoints
app.post("/products", createProduct)
app.get("/products", getProducts)

//Purchase endpoints
app.post("/purchases", createPurchase)
app.get("/users/:user_id/purchases", getPurchases)


app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé! 👣");
});
