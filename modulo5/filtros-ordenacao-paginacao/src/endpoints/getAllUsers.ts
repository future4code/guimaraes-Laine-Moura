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

export const getUsersOrdered = async (req: Request, res: Response): Promise<void> => {
   let statusCode = undefined;

   try {
      let sort = req.query.sort as string
      let order = req.query.order as string

      if (!sort) { sort='email' }
      if (order?.toUpperCase() !== 'ASC' || order?.toUpperCase() !== 'DESC') { order = 'ASC' }

      const users = await connection('aula48_exercicio')
      .orderBy(sort,order)
      .select()

      if(users.length < 1) {
         statusCode = 404
         throw new Error("Nenhum usuário foi encontrado com os parâmetros passados.")
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.status(statusCode || 400).send(error.message)
   }
}

export const getUsersPag = async (req: Request, res: Response): Promise<void> => {
   let statusCode = undefined;

   try {
      let size = Number(req.query.size)
      let page = Number(req.query.page)

      if(isNaN(size) || !size) {size = 10}
      if(isNaN(page) || !page) {page = 1}

      let offset = size * (page-1)

      const users = await connection('aula48_exercicio')
      .limit(size)
      .offset(offset)
      .select()

      if(!users.length){
         statusCode = 404
         throw new Error("Nenhum usuário encontrado");
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.status(statusCode || 400).send(error.message)
   }
}