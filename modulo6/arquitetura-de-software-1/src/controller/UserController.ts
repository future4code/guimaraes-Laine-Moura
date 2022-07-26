import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { v4 as generateId } from 'uuid'

export default class UserController {
    createUser = async (req: Request, res: Response):Promise<void> => {
        let statusCode = 400;

        try {
            const inputUser = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
            const userDB = new UserBusiness()
            await userDB.createUser(inputUser)

            res.status(201).send({ message: "Usuário criado!" });

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }
    }
}