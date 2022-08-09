import {User} from '../model/User'

export interface UserRepository {
    createUser(user:User):Promise<void>;
    getUser():Promise<void>
}