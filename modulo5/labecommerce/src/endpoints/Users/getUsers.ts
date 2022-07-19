import { Request, Response } from "express";
import connection from "../../connection";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    let statusCode = undefined;
    try {
       let name = req.query.name
 
       if (!name) { name = '%' }
 
       const users = await connection('labecommerce_users')
          .where('name', 'like', `%${name}%`)
 
       if (!users.length) {
          statusCode = 404
          throw new Error("Sinto muito. Não foi encontrado nenhum  usuário com esse nome. :(");
       }
 
       res.status(200).send(users)
 
    } catch (error: any) {
       res.status(statusCode || 400).send(error.message);
    }
 }