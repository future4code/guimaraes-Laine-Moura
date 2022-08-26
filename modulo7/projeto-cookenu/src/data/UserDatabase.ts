import { CustomError } from "../error/CustomError";
import { user, UserOutput } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private TABLE = "Cookenu_users"

    public insertUser = async (user: user) => {
        try {
            await UserDatabase.connection(this.TABLE)
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    role: user.role
                })
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public findUserByEmail = async (email: string): Promise<user> => {
        try {
            const result = await UserDatabase.connection(this.TABLE)
                .select('*')
                .where('email', 'like', email)

            return result[0]

        } catch (error: any) {
            throw new CustomError(404, error.message);
        }
    }

    public getProfile = async (id: string): Promise<UserOutput> => {
        try {
            const result = await UserDatabase.connection(this.TABLE)
                .select('*')
                .where('id', 'like', id)
            return result[0]
        } catch (error: any) {
            throw new CustomError(404, error.message)
        }
    }

    public getAllUsers = async (): Promise<UserOutput[]> => {

        try {

            const result = await UserDatabase.connection(this.TABLE)
                .select("id", "name", "email", "role")

            return result

        } catch (error:any) {
            throw new CustomError(400, error.message)
        }

    }

}