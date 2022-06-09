import express from 'express'
import { Request, Response } from 'express'
import { users, USER_TYPE } from './data'
import { AddressInfo } from 'net'
const app = express()
app.use(express.json())

app.get('/users', (req: Request, res: Response) => {
  res.status(200).send(users)
})

app.get('/users/:type', (req: Request, res: Response) => {
  let errorCode = 500
  try {
    let typeParam = req.params.type
    if (typeParam !== USER_TYPE.ADMIN && typeParam !== USER_TYPE.NORMAL) {
      errorCode = 422
      throw new Error("Valor inválido. Insira 'ADMIN' ou 'NORMAL'.")
    }
    const filteredType = users.filter(
      u => u.type.toLowerCase() === typeParam.toLowerCase()
    )

    if (!filteredType) {
      errorCode = 422
      throw new Error('Usuário não encontrado.')
    }
    res.status(200).send(filteredType)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})
