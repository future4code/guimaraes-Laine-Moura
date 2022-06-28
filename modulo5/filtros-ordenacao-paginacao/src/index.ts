import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";

app.get("/recipes", getAllRecipes)


app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé!");
});