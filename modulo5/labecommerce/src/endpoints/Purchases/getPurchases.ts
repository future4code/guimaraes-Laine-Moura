
import { Request, Response} from "express"
import connection from "../../connection"

export const getPurchases = async (req: Request, res: Response): Promise<void> => {
    let statusCode = 500
    try {
        const user_id = req.params.user_id

        const purchases = await connection("labecommerce_purchases")
        .select("product_id" , "quantity", "total_price")
        .where("user_id", "like", `${user_id}`)

        res.status(200).send(purchases)

    }   catch (error:any) { res.status(statusCode || 400).send(error.message) }
}
