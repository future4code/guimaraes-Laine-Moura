import { Request, Response} from "express"
import connection from "../../connection"
import { v4 as generateId } from 'uuid';

const getProduct = async(productId: string): Promise <any> => {

    const productArray = await connection("labecommerce_products")
    .select("price")
    .where("id", "like", `${productId}`)

    return productArray[0]
}

export const createPurchase = async(req: Request, res: Response): Promise<void> =>{

    try {

        const {user_id, product_id, quantity} = req.body

        if (!user_id || !product_id || !quantity || !user_id.length || !product_id.length || (typeof(quantity) != "number")) {
            res.send(400).send("Confira as informações fornecidas.")
            
        } else {

            const product = await getProduct(product_id)

            const totalPrice = product.price * quantity

            await connection("labecommerce_purchases")
            .insert({
                id: generateId(),
                user_id: user_id,
                product_id: product_id,
                quantity: quantity,
                total_price: totalPrice
            })
            res.status(200).send("Compra realizada com sucesso.")
        }

    } catch (err) {
        res.send(err)
    }

}

