import express from "express";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

app.listen(3003, () => {
    console.log('Servidor rodando na url http://localhost:3003');
})