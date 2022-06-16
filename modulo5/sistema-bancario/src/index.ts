import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { AddressInfo } from "net";
const app = express();
app.use(express.json());
import { clients, Client, Transaction } from './data';


const data = new Date()
const year = data.getFullYear()
const month = String(data.getMonth()+1).padStart(2,'0')
const day = String(data.getDate()).padStart(2,'0')
const today = day + '/' + month + '/' + year


app.get('/users', (req: Request, res: Response) => {
  res.status(200).send(clients)
})

app.post('/users', (req: Request, res: Response) => {
  const name = req.body.name
  const cpf = req.body.cpf
  const birthday = req.body.birthday
  const birthdaySplit:string = birthday.split('/')
  const yearOfBirth =  Number(birthdaySplit[2])
  const monthOfBirth = Number(birthdaySplit[1])
  const dayOfBirth = Number(birthdaySplit[0])
  let age:number = year - yearOfBirth

  if(age === 18) {
    if(Number(month) < monthOfBirth) {
      throw new Error("Você precisa ter ao menos 18 anos para abrir sua conta bancária.");
    } else {
      if (Number(day) < dayOfBirth) {
        throw new Error("Você precisa ter ao menos 18 anos para abrir sua conta bancária.");
      } else {
        for (let client of clients) {
          if(client.cpf === req.body.cpf){
            throw new Error("Ops! Você já tem uma conta conosco. Esse CPF já está cadastrado.")
          }
        }
        const newAccount:Client = {
          name: name,
          cpf:cpf,
          birthday:birthday,
          balance:0,
          bankTransaction: []
        }
        clients.push(newAccount)
      }
    }
  }
  else if (age < 18){
    throw new Error("Você precisa ter ao menos 18 anos para abrir sua conta bancária.");
  } else {
    for(let client of clients) {
      if(client.cpf === req.body.cpf){
        throw new Error("Ops! Você já tem uma conta conosco. Esse CPF já está cadastrado.")
      }
    }
    const newAccount:Client = {
      name: name,
      cpf:cpf,
      birthday:birthday,
      balance:0,
      bankTransaction: []
    }
    clients.push(newAccount)
  }
  res.status(200).send(clients)
})

app.get("/myaccount" , (req: Request, res: Response) => {

  const cpf = req.headers.cpf
      if (!cpf) {
          throw new Error("Favor conferir o CPF digitado.")
      }
      if (typeof cpf != "string") {
          throw new Error("CPF precisa ser uma string")
      }

  const indexBalance = clients.findIndex(client => client.cpf === cpf)
      try {
          res.status(200).send(`${clients[indexBalance].name}, seu saldo é de: ${clients[indexBalance].balance} reais.`)       
      } catch(error) {
          throw new Error("Algo está errado! Fale conosco.")
  }
})

app.put("/myaccount",(req: Request, res: Response) => {

  const name : string = req.body.name
  const cpf : string = req.body.cpf
  const cash : number = req.body.cash

  if (!name) {
      throw new Error("Confira o nome digitado")
}
  if (!cpf) {
      throw new Error("Confira o CPF digitado")
}
  if (!cash) {
  throw new Error("Confira a quantia digitada")
}

const indexDeposit = clients.findIndex(client => client.name === name && client.cpf === cpf)
  console.log(indexDeposit)
  try {
      if (indexDeposit != -1) {
              clients[indexDeposit].balance = clients[indexDeposit].balance + cash
              const newDeposit = {
                  date: today,
                  value: cash,
                  description: "Depósito."
              }
              clients[indexDeposit].bankTransaction.push(newDeposit)
              res.status(200).send(`${clients[indexDeposit].name}, você depositou ${cash} reais. Seu saldo atual é de  ${clients[indexDeposit].balance} reais`)
          } else {
              throw new Error("Algo está errado. Entre em contato com o nosso time pelos canais oficiais.")
          }
  } catch(error) {
  throw new Error("Algo está errado. Entre em contato com o nosso time pelos canais oficiais.")
}
})

app.post('/myaccount/payments' , (req: Request, res: Response) => {

  const paymentDate = req.body.paymentDate
  const description = req.body.description
  const value = req.body.value
  const cpf = req.body.cpf

  if (!description || !value || !cpf) {
      throw new Error("Confira a informação digitada.")
  }
  const indexPayment = clients.findIndex(client => client.cpf === cpf)
  try{
      if (indexPayment != -1) {
          if (paymentDate) {
              const newPayment:Transaction = {
                  date: paymentDate,
                  description: description,
                  value: value
          }
          clients[indexPayment].bankTransaction.push(newPayment)
          res.status(200).send("Pagamento agendado")
      } else {
          const newPayment:Transaction = {
              date: today,
              description: description,
              value: value
      }
      clients[indexPayment].bankTransaction.push(newPayment)
      res.status(200).send("Pago!")
      }
      } else {
          throw new Error("Confira as informações digitadas")
      }
  } catch(error) {
      throw new Error('Algo está errado. Confira as informações ou contate o suporte!')
  }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });; 