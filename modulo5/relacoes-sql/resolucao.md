```
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

//C) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`guimaraes-4211326-laine-moura`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `MOVIE` (`id`)) / Falha na chave estrangeira

//D)
ALTER TABLE Movie DROP COLUMN rating;

//E) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`guimaraes-4211326-laine-moura`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `MOVIE` (`id`)) / Não posso apagar pois a tabela está relacionada

```