import * as jwt from 'jsonwebtoken'
import { Unauthorized } from '../error/customError'

export type AuthenticatonData = {
    id: string
}

export class Authenticator {

    generateToken = ({id}:AuthenticatonData) => {
        const token = jwt.sign(
            {id},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_DURATION}

        )
        return token
    }

    getTokenData = (token: string): AuthenticatonData => {

        try {
            const payload = jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as AuthenticatonData
            return payload
            
        } catch (error:any) {
            console.log(error.message);
            throw new Unauthorized()
            
            
        }
        
    }

}