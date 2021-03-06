import {BaseDatabase} from './BaseDatabase/BaseDatabase';
import app from './app';
import { Request, Response } from 'express';
import {User} from './Classes/User'
import {Customer} from './Classes/Customer'
import { Client } from './Interface/Client';

app.get('/test', (req: Request, res: Response) => {
    res.status(200).send("Servidor em pé!");
});

/* HERANÇA

// Exercício 1

a) Seria possível imprimir a senha (password) atrelada a essa instância?
R: Sim
b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal?
R: Foi impressa 1 vez


const user1 = new User("1", "email@email.com", "teste", "123456");
console.log(user1)

Exercício 2
a) Quantas vezes a mensagem "Chamando o construtor da classe Customer" foi impressa no terminal? 
R: Foi impresso uma vez

b) Quantas vezes a mensagem "Chamando o construtor da classe User" foi impressa no terminal? Por quê?
R: Uma vez porque está imprimindo a frase da classe pai.

  
const customer1 = new Customer(
    "1",
    "email@email.com",
    "teste",
    "123456",
    "200"
  );
  console.log(customer1);
  
Exercício 3
a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
R: Sim porque ela está se estendendo da classe User

Exercício 4 e 5

const customer1 = new User(
    "1",
    "email@email.com",
    "Fulano",
    "123456",
  );
const introduceYourself = customer1.interoduceYourself();
console.log(introduceYourself);
*/


/* POLIMORFISMO

Exercício 1

const client1: Client = {
    name: "MP",
    registrationNumber: 1,
    consumedEnergy: 20000,
    calculateBill: () => {
      let totalBill = 2;
      return totalBill;
    },
  };
  
  console.log(client1);
a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
R: Não é possível imprimir o resultado de  calculateBill() pois mostra apenas a função


Exercício 2

export abstract class Place {
    constructor(protected cep: string) {}
  
    public getCep(): string {
      return this.cep;
    }
  }
  
   const place = new Place("123456789")

a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?

R: Não é possível criar uma instância de uma classe abstrata

b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
R: Estender às outras classes, tornando possível o acesso às propriedades
*/
