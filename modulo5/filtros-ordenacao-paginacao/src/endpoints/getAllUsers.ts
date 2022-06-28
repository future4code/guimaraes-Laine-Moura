import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"


export const getUsers = async (req: Request, res: Response): Promise<void> => {
   let statusCode = undefined;
   try {
      let name = req.query.name

      if (!name) { name = '%' }

      const users = await connection('aula48_exercicio')
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

export const getUserByType = async (req: Request, res: Response): Promise<void> => {
   let statusCode = undefined;

try {
   let type = req.params.type
   
   if(!type) { type ='%' }

   const users = await connection('aula48_exercicio')
   .where('type', '=', `${type}`)

   if(!users.length) {
   statusCode = 404
   throw new Error("O tipo procurado para o usuário não existe. :(") 
   }
   
   res.status(200).send(users)

} catch (error: any) {
   res.status(statusCode || 400).send(error.message);
   }
}

