import { userInputDTO } from "../model/userInputDTO";
import { generateId } from "../services/generateId";
import { user } from "../types/user";
import { UserRepository } from "../repository/UserRepository";

export class UserBusiness {
  constructor(private userDatabase: UserRepository) {}
  public createUser = async (input: userInputDTO): Promise<void> => {
    try {
      const { name, email, password } = input;
      const id: string = generateId();
      const user: user = { id, name, email, password };
      await this.userDatabase.createUser(user);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getAll = async (): Promise<user[]> => {
    const result = await this.userDatabase.getAllUsers();
    return result;
  };
}