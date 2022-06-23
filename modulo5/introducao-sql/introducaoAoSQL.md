```
USE `guimaraes-4211326-laine-moura`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;

/* EXERCICIO 1
A) VARCHAR(N) = string com o N máximos de caracteres, PRIMARY KEY = chave primária, NOT NULL = valor não pode ser nulo, DATE = data
B) SHOW DATABASES - meu database e informações sobre ele
	SHOW TABLES - retorna tabela Actor
C) */
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

DESCRIBE ACTOR;

#EXERCÍCIO2

#A
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);


#EXERCÍCIO2
#A
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Sônia Braga",
  1500000,
  "1950-06-08",
  "female"
);
#B Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' - Entrada duplicada '002' para a chave primária.
#C)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
#D
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
#E
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Sônia Braga",
  719333.33,
  "1950-06-08", 
  "female"
);

#F
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Leandra Leal",
  719333,
  "1982-09-08", 
  "female"
);

#EXERCICIO3
#A
SELECT * FROM Actor WHERE gender = "female";
#B
SELECT salary FROM Actor WHERE name = "Tony Ramos";
#C
SELECT * FROM Actor WHERE gender="invalid";
/*Não retornou nenhum pois todos os valores foram preenchidos com valores válidos*/
#D
SELECT id, name, salary FROM Actor WHERE salary>=500000;
#E
SELECT id, name from Actor WHERE id = "002";
```