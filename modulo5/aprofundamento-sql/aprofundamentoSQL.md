```/*EXERCICIO1
A) Exclusão da coluna *salary* 
B) Modifica o limite de caracteres para 6 e possibilita valor nulo*/
#C)
ALTER TABLE Actor MODIFY gender VARCHAR(100);```

#EXERCÍCIO2
#A)
UPDATE Actor 
SET birth_date = "1929-10-16"
WHERE id = 3;

#B)
UPDATE Actor
SET name = "SÔNIA BRAGA"
WHERE id = 5 AND name="Sônia Braga";

UPDATE Actor
SET name = "Sônia Braga"
WHERE name="SÔNIA BRAGA";

#C
UPDATE Actor
SET propriedade = valor AND propriedade1 = valor1
WHERE id = 5;

#D) 
UPDATE Actor
SET name = "Sônia Braga"
WHERE id=c; #Error Code: 1054. Unknown column 'c' in 'where clause'/Coluna desconhecida 'c' na cláusula where.

UPDATE Actor
SET name = "Sônia Braga"
WHERE id=500; #Não retornou erro, mas não afetou nenhuma linha.

#EXERCICIO3
#A)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
select * from Actor;
#B)
DELETE FROM Actor WHERE gender = "male" AND salary >1000000;

#EXERCICIO4
#A)
SELECT MAX(salary) FROM Actor;

#B)
SELECT MIN(salary) from Actor where gender="female";

#C)
select count(*) from Actor where gender = "female";

#D)
select SUM(salary) from Actor;

#EXERCICIO5
#A) Conta quantos atores de cada gênero estão presentes na tabela
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

#B)
SELECT id, name
FROM Actor
ORDER BY name DESC;

#C)
SELECT *
FROM Actor
ORDER BY salary;

#D)
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;

#E)
SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender;

#EXERCICIO6

CREATE TABLE MOVIE(
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);


INSERT INTO MOVIE(id, title, synopsis, release_Date, rating)
VALUES(
  "001",
  "Se eu fosse você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);

INSERT INTO MOVIE(id, title, synopsis, release_Date, rating)
VALUES(
  "002",
  "Doce mãe",
 "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);

INSERT INTO MOVIE(id, title, synopsis, release_Date, rating)
VALUES(
  "003",
  "Dona flor e seus dois maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);

INSERT INTO MOVIE(id, title, synopsis, release_Date, rating)
VALUES(
  "004",
  "O auto da compadecida",
"As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
  "2000-09-10",
  10
);


SELECT * FROM MOVIE;
describe MOVIE;

#A)
ALTER TABLE MOVIE ADD playing_limit_date DATE;

#B)
ALTER TABLE MOVIE CHANGE rating rating FLOAT;

#C)
UPDATE MOVIE
SET	playing_limit_date = "2022-12-31"
WHERE id = "001";

#D) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 / Nenhuma linha foi afetada porque a chave não existe

DELETE FROM MOVIE WHERE id= "001";

UPDATE MOVIE
SET synopsis = "Casal troca de corpo"
WHERE id = 001;

#EXERCICIO7
#A)
select * 
from MOVIE
where rating >7.5;

#B)
select avg(rating)
from MOVIE;

#C)
select count(*)
from MOVIE;

#D)
select count(*)
from MOVIE
where release_Date > CURDATE(); #CURDATE() retorna a presente data

#E)
select MAX(rating)
from MOVIE;

#F)
select min(rating)
from MOVIE;

#EXERCICIO8
#A)
select * 
from MOVIE
order by title;

#B)
select *
from MOVIE
order by title
limit 5;

#C)
select *
from MOVIE
order by release_Date < curdate()
limit 3;