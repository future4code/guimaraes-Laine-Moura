// Exercícios de interpretação de código
/*
1-
a. undefined
b. null
c. 11
d. 3
e. 11
f. 9 

2-
"SUBI NUM ÔNIBUS EM MIRROCOS"
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

console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

comidasPreferidas[1] = prompt('Qual é a sua comida favorita?');
console.log(comidasPreferidas);*/

let listaDeTarefas = [];
listaDeTarefas[0] = prompt('Diga uma tarefa');
listaDeTarefas[1] = prompt('Diga uma tarefa');
listaDeTarefas[2] = prompt('Diga uma tarefa');
console.log(listaDeTarefas);

let indice = prompt(`Digite o índice da tarefa que você já realizou: 0 para ${listaDeTarefas[0]}, 1 para ${listaDeTarefas[1]} e 2 para ${listaDeTarefas[2]}`);
listaDeTarefas.pop(indice)
console.log(listaDeTarefas);