//Exercício 1
//a   process.argv[2] e node index.js parametro
//b 

{const nome = process.argv[2]
const idade = Number(process.argv[3])
const idadeMaisSete = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

//c
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você tera ${idadeMaisSete}.`);
}