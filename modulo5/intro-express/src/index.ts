import express from "express";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {          
    res.send("Hello from Express")
})

type user = {
    id: number | string,
    name: string,
    phone: number,
    email: string,
    website: string
}

const users:user[] = [
    {
        id: 1,
        name: "Camila Coradi",
        phone:11987654321,
        email: "camila@email.com",
        website: "camila.dev.com",
    },
    {
        id: 2,
        name: "Tiago Hennig",
        phone:51987654321,
        email: "tiago@email.com",
        website: "tiago.dev.com",
    }
    
]

app.get("/users", (req, res) => {
    if(!users.length){
        res.status(401).send("Vazio")
    }
    res.status(201).send(users)
}) 
type post = {
    id: number | string,
    title: string,
    body: string,
    userId: number | string
}

const posts:post[] = [
    {
        id: "01",
        title: "Itália",
        body: "Lembrança dessa viagem incrível!",
        userId: 1
    },
    {
        id: "02",
        title: "Creme",
        body: "Achadinho!",
        userId: 2
    }

]

app.get("/posts", (req, res) => {
    if(!posts.length){
        res.status(401).send("Vazio")
}
    res.status(201).send(posts)
})

app.listen(3003, () => {
    console.log('Servidor rodando na url http://localhost:3003');
})