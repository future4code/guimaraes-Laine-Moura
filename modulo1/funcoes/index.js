/*EXERCÍCIOS DE INTEREPRETAÇÃO DE CÓDIGO*/
//1-
//a. 

// 10
// 50

//b.
//É o mesmo que chamar a função. Não mostraria o resultado no console.



 //2-

//  a. Guarda o valor inserido pelo usuário na varável *textoDoUsuario*. 
//  Cria uma função que retorna o texto em minúsculo e se contém a palavra 'cenoura' no texto digitado.
//  Guarda o resultado da função na variável *resposta* e pede pra imprimir.
 
//  b. i.true
//     ii.true
//     iii.true

 

/* EXERCÍCIOS DE ESCRITA DE CÓDIGO */
// 1
//a

// function dadosUsuarioTeste() {
//     console.log(`Eu sou Laíne, tenho 30 anos, moro no Rio de Janeiro e sou geógrafa.`);
// } 
// dadosUsuarioTeste()

//b.

// function dadosUsuario(nome, idade, endereco, profissao) {
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro no ${endereco} e sou ${profissao}.`);
// } 
// dadosUsuario('Laíne', 30, 'Rio de Janeiro', 'geógrafa')


//2
//a.

// function soma(n1, n2) {
// let somar = n1+n2
// return somar
// } console.log(soma(5, 3))

//b.

// function oNumeroEIgual(n1, n2) {
//  let compara = n1>=n2
// return compara
// } 
//console.log(oNumeroEIgual(8,5))

//c.

// function ePar(n1) {
// let par = n1%2 === 0;
// return par
// } 
// ePar(5)

//d.

// function tamanhoString(string) {
//     console.log(string.toLowerCase(), string.length);
// }
// tamanhoString(`A vida é bela!`)

//3
//a.
// function soma(n1, n2) {
// let somar = n1 + n2
// return somar
// }

// function diferenca(n1, n2) {
// let diminuir = n1 - n2
// return diminuir
// }

// function multiplicacao(n1, n2) {
// let multiplicar = n1 * n2
// return multiplicar
// }

// function divisao(n1, n2) {
// let dividir = n1 / n2
// return dividir
// }

// let n1 = Number(prompt('Digite um número'));
// let n2 = Number(prompt('Digite um número'));

// console.log('Texto:', n1, n2);
// console.log(`Texto:`, soma(n1,n2));
// console.log(`Texto:`, diferenca(n1,n2));
// console.log(`Texto:`, multiplicacao(n1,n2));
// console.log(`Texto:`, divisao(n1,n2));

// DESAFIOS
// 1
// a.
// const exercicio = (n1, n2) => n1 * n2;
// // console.log(exercicio(5,3));

// // b.
// const exercicio2 = (numero1, numero2) => numero1 + numero2;
// console.log(exercicio2(2,3));
// console.log(exercicio(exercicio2()))

// //2
// function pitagoras(a, b) {
//     let hipotenusa = Math.hypot(a, b);
//     return hipotenusa
// } console.log(pitagoras(3, 3));
