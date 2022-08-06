import { app } from "./controller/app"
import { Request, Response} from 'express'
import { userRouter } from './controller/routes/UserRouter'


app.use("/user", userRouter)

app.get("/test", (req: Request, res: Response) => {
    res.status(200).send("Servidor em pé! 👣");
  });