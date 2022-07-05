import { Request, Response } from "express";
import connection  from "../../connection";

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  let statusCode = 500;
  
  try {
    let sort = req.query.sort as string
    let order = req.query.order as string

    if (!sort) { sort='price' }
    if (order?.toUpperCase() !== 'ASC' || order?.toUpperCase() !== 'DESC') { 
      order  }

    const products = await connection('labecommerce_products')
    .orderBy(sort,order)
    .select()

    if(products.length < 1) {
       statusCode = 404
       throw new Error("Nenhum usuário foi encontrado com os parâmetros passados.")
    }

    res.status(200).send(products)
  } catch (error: any) { res.status(statusCode || 400).send(error.message) }
}