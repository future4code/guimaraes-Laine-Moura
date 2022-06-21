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

/* Exercício 
 A) */
 const updateActor = async (id: string, salary:number) => {
    await connection("Actor")
    .update({salary:salary})
    .where("id",id)
 }


updateActor("005", 1800000)
.then(result => console.log(result))
.catch(err => console.log(err))

//B
const deleteActor = async (id:string): Promise<void> => {
    await connection("Actor")
    .delete("Actor")
    .where("id", id)
}

deleteActor("001")
.then(result => console.log("Ator/Atriz deletado om sucesso."))
.catch(err => console.log(err));

//C

const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({gender});
  
    return result[0].average;
  };

  avgSalary("male")
    .then(result => console.log(result))
    .catch(err => console.log(err));

/* Exercício 3
A) */

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = "${id}"
    `);

      res.status(200).send(result[0])

    } catch(e) {
        console.error({e})
        return res.status(500).send("Algo deu errado.")
    }
  });

