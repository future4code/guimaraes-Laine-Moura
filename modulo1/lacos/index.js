//Exercícios de interpretação de código
/*
1. Declara a variável valor começando com 0, percorrendo de 0 a 4 e fazendo a soma dos valores cada vez que passa pela condição

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i

  fazer iteração enquanto índice < 5
começa em 0 // índice 0
0 = 0 + 0
passa na condição // índice 1
0 = 0 + 1
passa na condição // índice 2
1 = 1 + 2
passa na condição // índice 3
3 = 3 + 3
passa na condição // índice 4
10 = 6 + 4
agora meu índice é maior do que 5, encerra a condição e assim a iteração
}
console.log(valor)

//2 
a. Imprime todos os números maiores que 18
b. Com esse método não é possível acessar o índice

3.
*
**
***
****

*/

// Exercícios de escrita de código
//1
let quantosPets = Number(prompt(`Quantos animais de estimação você tem?`));
let arrayDePets = [];

if (quantosPets === 0) {
    console.log(`Que pena! Você pode adotar um pet!`);
} else if (quantosPets > 0) {
    for (let i = 0; i < quantosPets; i++) {

        let nomeDosPets = prompt(`Digite aqui o nome do seus pet`);
        arrayDePets.push(nomeDosPets);

    }
    console.log(arrayDePets);

} else if (quantosPets === "") {
    console.log(`Insira um valor`);
} else {
    console.log(`Insira um valor válido`);
}

//2

//a
let arrayOriginal = [10,20,30,40,50];
for(let numero of arrayOriginal){
    console.log(numero);
}

//b
let arrayOriginal = [10,20,30,40,50];
for(let numero of arrayOriginal){
    let divididoPorDez = numero/10
    console.log(divididoPorDez);
} 


//c
let arrayOriginal = [10, 20, 30, 40, 50, 33];
let novoArrayDePares = [];
for (let numero of arrayOriginal) {
    if (numero % 2 === 0) {
   novoArrayDePares.push(numero)
    } 
}
console.log(novoArrayDePares); 

//d
let arrayOriginal = [10, 20, 30, 40, 50];
for (let i = 0; i < arrayOriginal.length; i++) {

    console.log(`O elemento do índex ${i} é: ${arrayOriginal[i]}`); 
}

//e
let array = [50, 100, 150, 200];
let menor = Math.min(...array);
let maior = Math.max(...array);
console.log(`Dado o array ${array}, o menor número é: ${menor} e o maior é ${maior}`);