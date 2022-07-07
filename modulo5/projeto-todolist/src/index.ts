import connection from './connection';
import app from './app';
import { Request, Response } from 'express';
import { v4 as generateId } from 'uuid';

const id = generateId()


app.post("/user", async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body
        if (!name || !nickname || !email) {
            throw new Error("Parâmetro não enviado");
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

app.get("/user/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        const idFromUser = await connection.raw(`
        SELECT * FROM ToDoListUser
        WHERE id = '${id}'
     `);
        res.status(200).send(idFromUser[0][0]);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});

app.put("user/edit/:id"), async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        if (!id) { throw new Error("Parâmetro id não enviado") }

        const { name, nickname, email } = req.body
        if (name === "" || nickname === "" || email === "") { throw new Error("Parâmetros não podem ser vazios.") }

        await connection("ToDoListUser")
            .update({
                name,
                nickname,
                email
            })
            .where({ id })
        res.status(200).send(`Atualização dos dados do usuário ${nickname} realizadas com sucesso"`)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

app.post("/task", async (req: Request, res: Response) => {
    const { id, title, status, limitDate, createUserId } = req.body;
    try {
        if (!title || !status || !limitDate) { throw new Error("Parâmetros necessário não foi enviado.") }
        if (title === "" || status === "" || limitDate === "") { throw new Error("Parâmetros passados pelo body não podem ser vazios") }

        await connection.raw(`
        INSERT INTO ToDoListTask 
        (id, title, status, limitDate, createUserId)
        VALUES(
        "${id}",
        "${title}",
        "${status}",
        "${limitDate.split("/").reverse().join("/")}",
        "${createUserId}"
        )
        `);


        res.status(201).send("Tarefa criada com sucesso!");
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});


app.get("/task/:id", async (req: Request, res: Response) => {
    const id: string = req.params.id;
    try {
        const idFromTask = await connection.raw(`
        SELECT * FROM ToDoListTask
        WHERE id = '${id}'
     `);
        res.status(200).send(idFromTask[0][0]);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});




app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé!");
});
