import express from "express";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())



app.get("/", function (req, res){
    res.send("Página inicial")
})

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")    
})

type toDo = {
    userId: number,
    id: number,
    title:string,
    completed: boolean
}

app.listen(3003, () => {
    console.log('Servidor rodando na url http://localhost:3003');
})
