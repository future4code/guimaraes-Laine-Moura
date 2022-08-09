import { User } from '../model/User'
import { BaseDatabase } from './BaseDatabase'
import { UserRepository } from '../Repository/UserRepository'

export class UserDatabase extends BaseDatabase implements UserRepository{
    public createUser = async (user: User):Promise<void>=> {
        await UserDatabase.connection('labook_users')
        .insert({
            id: user.getId(),
            name: user.getName(),
            email: user.getEmail(),
            password: user.getPassword()
        })
    }

    public  getUser = async ():Promise<void> => { 
        try {
            return await UserDatabase.connection('labook_users')
        }
        catch (error: any) {
            throw new Error(error.sqlMessage);
            
        }
    }
}