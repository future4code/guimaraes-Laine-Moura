console.log("Hello, world!")

import express from 'express'
import { Request, Response } from 'express'
import { AddressInfo } from "net";
import {produtos} from './data'
import {v4 as generateId} from 'uuid'
const app = express();
app.use(express.json());


app.get("/test", (req: Request, res: Response)=>{
  res.status(200).send("Alô!");
})

app.post("/addProduto", (req: Request, res: Response) => {
  const name = req.body.name;
  const price = req.body.price;

  produtos.push({
    id: generateId(),
    name: name,
    price: price,
  });
  res.status(201).send(produtos);
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });; 