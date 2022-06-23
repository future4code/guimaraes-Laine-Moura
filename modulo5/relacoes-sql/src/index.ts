import connection from './connection';
import app from './app';
import { Request, Response } from 'express';

/*
Exercício 1
A) A chave estrabngeira é a chave capaz de relacionar duas tabelas
*/

app.get('/test', (req, res) => {
    res.status(200).send("Servidor em pé!");
});