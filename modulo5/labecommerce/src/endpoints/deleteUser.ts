import { Request, Response } from "express"
import app from "../app"
import connection from "../connection";

export const deleteUser = app.post("/users", async (req: Request, res: Response): Promise<void> => {
    let statusCode = 500;
    try {
        const id = req.params.id as string

        const removeUser =  await connection("labecommerce_users")
            .where({ id: id })
            .del()
            res.status(200).send("Usuário removido com sucesso!")

    } catch (error:any) { res.status(statusCode || 400).send(error.message) }
})