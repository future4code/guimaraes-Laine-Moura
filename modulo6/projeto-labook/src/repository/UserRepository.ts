import { user } from "../types/user";

export interface UserRepository {
  createUser(user: user): Promise<void>;
  getAllUsers(): Promise<user[]>;
}