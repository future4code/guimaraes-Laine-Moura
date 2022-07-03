import { Request, Response } from "express"
import app from "../app"
import { v4 as generateId } from 'uuid';
import connection from "../connection";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 500;
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error("Não podemos fazer o cadastro ao menos que todos os campos sejam preenchidos. Revise suas informações ;)");
        }

        const newUser = await connection("labecommerce_users")
            .insert({
                id: generateId(),
                name: name,
                email: email,
                password: password
            })
            res.status(201).send("Usuário criado com sucesso!")

    } catch (error:any) { res.status(statusCode || 400).send(error.message) }
}