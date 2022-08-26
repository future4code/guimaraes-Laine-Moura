import { UserDatabase } from "../data/UserDatabase";
import { CustomError, EmailAlreadyInUse, FieldsNotProvided, InvalidEmail, InvalidName, InvalidPassword, InvalidRole, UserNotFound } from "../error/CustomError";
import { LoginInputDTO, user, UserInputDTO, UserOutput } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

const idGenerator = new IdGenerator()
const hashManager = new HashManager()
const authenticator = new Authenticator()

export class UserBusiness {
    private userDatabase: UserDatabase
    constructor() {
        this.userDatabase = new UserDatabase()
    }

    public signup = async (input:UserInputDTO):Promise<string> => {
        try {
            const { name, email, password, role } = input
            if (!name || !email || !password) {throw new FieldsNotProvided()}

            const verifyEmail = await this.userDatabase.findUserByEmail(email)
            if(verifyEmail){ throw new EmailAlreadyInUse()}

            if(name.length<3) { throw new InvalidName()}

            if(!email.includes('@')) {throw new InvalidEmail()}

            if (password.length < 6) {throw new InvalidPassword()}

            if (role !== "user" && role !== "admin") {throw new InvalidRole()}

            const id: string = idGenerator.generateId();
			const hashPassword = await hashManager.hashGenerator(password)

			const userSignUp: user = {
				id,
				name,
				email,
				password: hashPassword,
				role
			}

			await this.userDatabase.insertUser(userSignUp);
			const payload = { id, role }

			const token = authenticator.generateToken(payload);
			return token;
		} catch (error: any) {
			throw new CustomError(400, error.message);
		}
             
    }

    public login = async (input: LoginInputDTO):Promise<string> => {
        try {
            const {email, password} = input

            if(!email || !password) {throw new FieldsNotProvided()}
            if(!email.includes('@')) {throw new InvalidEmail()}

            const user = await this.userDatabase.findUserByEmail(email);
			if (!user) {throw new UserNotFound()}

            const hashPassword = await hashManager.hashCompare(password, user.password)
            if(!hashPassword) {throw new InvalidPassword()}

            const payload = {
                id: user.id,
                role: user.role
            }

            const token = authenticator.generateToken(payload)

            return token
            
        } catch (error:any) {
            throw new CustomError(400, error.message)
        }
    }

    public getOwnProfile = async (token: string): Promise<UserOutput> => {
		try {

			const tokenData = authenticator.getTokenData(token)

			const user = await this.userDatabase.getProfile(tokenData.id)

			if(!user) {throw new UserNotFound()}

			return user

		} catch (error: any) {
			throw new CustomError(400, error.message)
		}
	}



}
