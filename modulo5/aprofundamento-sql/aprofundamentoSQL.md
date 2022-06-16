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