import connection from './connection';
import app from './app';
import { Request, Response } from 'express';

app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé!");
});

/*
Exercício 1
A) Retorna todos os valores do MYSQL. Dois arrays, sendo o primeiro com os objetos da aplicação e o segundo com um array de configuração do banco de dados.
B)*/
const searchActor = async (name:string):Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0]
}

searchActor("Sônia Braga")
    .then(result => console.log(result))
    .catch(err => console.log(err))

//C

const genderCounter = async (gender:string):Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"
    `)

    return  result[0][0]
}

genderCounter("male")
    .then(result => console.log(result))
    .catch(err => console.log(err))