import { Request, Response } from "express";
import connection  from "../connection";

export const getProducts = async (req: Request, res: Response): Promise<void> => {
  let statusCode = 500;
  
  try {
    const products = await connection("labecommerce_products");

    res.status(200).send(products);
  } catch (error: any) { res.status(statusCode || 400).send(error.message) }
}