import connection from './connection';
import app from './app';
import { Request, Response } from 'express';
import { v4 as generateId } from 'uuid';

const id = generateId()


app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body
        if( !name || !nickname || !email ) { throw new Error("Parâmetro não enviado");
         }
        await connection.raw(`
        INSERT INTO ToDoListUser (id, name, nickname, email)
        VALUES(
            "${generateId()}",
            "${name}",
            "${nickname}",
            "${email}"
        )
        `)
        res.status(201).send(`Usuário ${nickname} adicionado com sucesso!`);
    } catch (error: any) {
        res.status(500).send(error.message);
    }

})



app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé!");
});
