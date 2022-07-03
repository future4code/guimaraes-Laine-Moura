import { Request, Response } from "express";
import  connection  from "../connection";
import { v4 as generateId } from "uuid";

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  let statusCode = 500;

  try {
    const { name, price, image_url } = req.body;
    if (!name || !price || !image_url) {
      throw new Error(
        "Reveja as informações fornecidas."
      );
    }
    const newProduct = await connection("labecommerce_products")
    .insert({
      id: generateId(),
      name: name,
      price: price,
      image_url: image_url,
    })

    res.status(201).send("Produto adicionado com sucesso!")

  }  catch (error:any) { res.status(statusCode || 400).send(error.message) }
}
