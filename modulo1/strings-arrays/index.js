// Exercícios de interpretação de código
/*
1-
a.  undefined
b.  null
c.  11
d.  3
e.  [3, 19,  5,  6,  7, 8,  9, 10, 11, 12, 13]
f.  9

2-
"SUBI NUM ÔNIBUS EM MIRROCOS, 27"
*/

// Exercícios de escrita de código
/*

1-
let nomeDoUsuario = prompt('Qual é o seu nome?');
let emailDoUsuario = prompt('Digite aqui o seu email:');
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`); 

2-
let comidasPreferidas = ['Lasanha', 'Feijoada', 'Caldo de Mocotó', 'Salmão', 'Quiche'];
console.log(comidasPreferidas);

console.log(`Essas são as minhas comidas preferidas:
${comidasPreferidas[0]}, 
${comidasPreferidas[1]},
${comidasPreferidas[2]},
${comidasPreferidas[3]},
${comidasPreferidas[4]}`);

comidasPreferidas[1] = prompt('Qual é a sua comida favorita?');
console.log(comidasPreferidas);

3- 
let listaDeTarefas = [];
listaDeTarefas[0] = prompt('Diga uma tarefa');
listaDeTarefas[1] = prompt('Diga uma tarefa');
listaDeTarefas[2] = prompt('Diga uma tarefa');
console.log(listaDeTarefas);

let indice = prompt(`Digite o índice da tarefa que você já realizou: 0 para ${listaDeTarefas[0]}, 1 para ${listaDeTarefas[1]} e 2 para ${listaDeTarefas[2]}`);
listaDeTarefas.pop(indice)
console.log(listaDeTarefas);

// DESAFIOS
/* 
1-
let frase = 'Então, minha querida Amélie, você não tem ossos de vidro. Pode suportar os baques da vida.';
let array = frase.split(' ');
console.log(array);

2-
let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log(`A posição do índice de "Abacaxi" é: ${array.indexOf('Abacaxi')}. O tamanho do array é:  ${array.length}`);
*/