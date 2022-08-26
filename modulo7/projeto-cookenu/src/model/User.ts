export type user = {
    id: string
    email: string
    password: string
    name: string,
    role: USER_ROLES
}

enum USER_ROLES {
    admin = "admin",
    user = "user"
}

export type UserOutput = {
    id: string,
    name: string,
    email: string
}

export interface UserInputDTO {
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
 }

 export interface LoginInputDTO {
    email: string,
    password: string
 }