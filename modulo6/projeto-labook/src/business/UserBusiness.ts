import { v4 as generateId } from 'uuid'
import { User } from '../model/User'
import { UserDatabase } from "../data/UserDatabase";

export class UserBusiness {
    async createUser ( name: string, email: string, password: string): Promise<void> {
        let message = 'Ok'
        let statusCode = 400

        if(!email || !name || !password) {
            message = 'Nome, email e senha precisam ser fornecidos'
            statusCode = 406
            throw new Error("message");
            
        }
        const id = generateId()
        const user = new User (
            id, 
            name, 
            email, 
            password
        )

        const userDB = new UserDatabase()
        await userDB.createUser(user)
    }

    getAllUsers = async (): Promise<void> => {
        return await new UserDatabase().getUser();
      }
}
