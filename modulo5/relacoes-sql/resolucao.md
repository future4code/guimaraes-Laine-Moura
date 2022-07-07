```
//Exercício 1
//A) A chave estrangeira é a chave capaz de relacionar duas tabelas

//B)
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES MOVIE(id)
);

insert into Rating (id, comment, rate, movie_id)
values (
"001",
"Bom demaiiis!",
7,
"004"
);

//C) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails  / Falha na chave estrangeira

//D)
ALTER TABLE Movie DROP COLUMN rating;

//E) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails  Não posso apagar pois a tabela está relacionada

//Exercício 2
//A) Cria a tabela MovieCast com as propriedades movie_id e actor_id. Fazendo a referência das chaves estrangeiras e suas propriedades.

//B) 
# movie_id	actor_id
    004	        002
    004        	004
    004        	005
    002        	002
    003        	006
    003        	002

//D)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails / Falha de chave estrangeira não localizada

// Exercício 3
//A)
Checa se a condição está certa NA condição passada. ON / NA

//B)
SELECT m.id as movie_id, r.rate as rating FROM MOVIE m
INNER JOIN Rating r ON m.id = r.movie_id;

```