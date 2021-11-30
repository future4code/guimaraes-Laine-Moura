// //Exercícios de interpretação de código
// /*
// 1. Declara a variável valor começando com 0, percorrendo de 0 a 4 e fazendo a soma dos valores cada vez que passa pela condição

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   //valor = 0 + 0 // soma 0
//   //valor = 0 + 1 // soma 1
//   //valor = 1 + 2 // soma 2
//   //valor = 3 + 3 // soma 3
//   //valor =  6 + 4 // soma 4 // encerra com o índice 4
//   //valor = 10
// }
// console.log(valor)

// 2// 
// a. Imprime todos os números maiores que 18
// b. 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//  for (let numero of lista) {
// 		console.log(numero)
// 	}

// 3.
// *
// **
// ***
// ****

// */

// // Exercícios de escrita de código
// //1
// let quantosPets = Number(prompt(`Quantos animais de estimação você tem?`));
// let arrayDePets = [];

// if (quantosPets === 0) {
//     console.log(`Que pena! Você pode adotar um pet!`);
// } else if (quantosPets > 0) {
//     for (let i = 0; i < quantosPets; i++) {

//         let nomeDosPets = prompt(`Digite aqui o nome do seus pet`);
//         arrayDePets.push(nomeDosPets);

//     }
//     console.log(arrayDePets);

// } else if (quantosPets === "") {
//     console.log(`Insira um valor`);
// } else {
//     console.log(`Insira um valor válido`);
// }

// //2

// //a
// let arrayOriginal = [10,20,30,40,50];
// for(let numero of arrayOriginal){
//     console.log(numero);
// }

// //b
// let arrayOriginal = [10,20,30,40,50];
// for(let numero of arrayOriginal){
//     let divididoPorDez = numero/10
//     console.log(divididoPorDez);
// } 


// //c
// let arrayOriginal = [10, 20, 30, 40, 50, 33];
// let novoArrayDePares = [];
// for (let numero of arrayOriginal) {
//     if (numero % 2 === 0) {
//    novoArrayDePares.push(numero)
//     } 
// }
// console.log(novoArrayDePares); 

// //d
// let arrayOriginal = [10, 20, 30, 40, 50];
// for (let i = 0; i < arrayOriginal.length; i++) {

//     console.log(`O elemento do índex ${i} é: ${arrayOriginal[i]}`); 
// }

//e
let array = [50, 100, 150, 200];
let menor = Math.min(...array);
let maior = Math.max(...array);
console.log(`Dado o array ${array}, o menor número é: ${menor} e o maior é ${maior}`);