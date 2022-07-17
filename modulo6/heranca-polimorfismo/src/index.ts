import {BaseDatabase} from './BaseDatabase/BaseDatabase';
import app from './app';
import { Request, Response } from 'express';

app.get('/test', (req, res) => {
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

*/