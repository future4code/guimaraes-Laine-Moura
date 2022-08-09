import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController { 
    async signup(req:Request, res:Response):Promise<void>{
        let message = 'Usuário criado com sucesso'
        try {
            const {name, email, password} = req.body
            const userDB = new UserBusiness()
            await userDB.createUser(name, email, password)
            res.status(201).send({message})
        } catch (error:any) {
            res.status(400).send(error.sqlMessage)
        }
    }
}