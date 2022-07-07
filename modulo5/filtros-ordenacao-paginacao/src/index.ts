import { app } from "./app";
import {getUsers, getUserByType, getUsersOrdered, getUsersPag} from './endpoints/getAllUsers'

app.get('/users', getUsers)
app.get("/users/:type", getUserByType)
app.get("/usersOrdered", getUsersOrdered)
app.get("/usersPag", getUsersPag)


app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé!");
});