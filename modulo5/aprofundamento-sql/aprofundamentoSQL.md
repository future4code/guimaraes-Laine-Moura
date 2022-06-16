```/*EXERCICIO1
A) Exclusão da coluna *salary* 
B) ALtera matém o limite de caracteres em 6 e possibilita valor nulo*/
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