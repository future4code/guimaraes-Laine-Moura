/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO */
// Exercício 1
/* false
    false
    true 
    boolean */



// Exercício 2
/* Não há definição que o tipo é número. O console entenderá que se trata de uma string e vai concatenar o conteúdo inserido. 
Será impresso o primeiro número e o segundo. Ex: 5 + 6 = 56, ao invés de realizar a soma com resultado 11 */



// Exercício 3
/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)*/




/* EXERCÍCIOS DE ESCRITA DE CÓDIGO*/
// Exercício 1

/*let idadeUsuario = Number(prompt('Qual é a sua idade?'));
let idadeAmigo = Number(prompt('Qual é a idade do seu/sua melhor amigo/a?'));

console.log(`Sua idade é maior que a do seu best? ${(idadeUsuario > idadeAmigo)}`);
console.log(`A diferença de idade entre você e seu amigo é de: ${(idadeUsuario - idadeAmigo)} `);*/


// Exercício 2
/*let numeroPar = Number(prompt('Insira um número par'));
console.log(numeroPar%2);

a definição de número par é que ele tem resto 0 quando dividido por 2, caso o usuário insira um número ímpar, o resto não será 0*/


//EXERCÍCIO 3
/*let idadeUsuario = Number(prompt("Qual é a sua idade?"));
console.log(`Sua idade é: ${idadeUsuario}`);
console.log(`Sua idade em meses é : ${(idadeUsuario * 12)}`);
console.log(`Sua idade  em dias é: ${(idadeUsuario * 365)}`);
console.log(`Sua idade em horas é: ${(idadeUsuario * 365 * 24)}`);*/


// Exercício 4
/*let num1 = Number(prompt('Insira aqui um número'));
let num2 = Number(prompt('Insira aqui outro número'));

console.log(`O primeiro número é maior que o segundo?: ${num1 > num2}`);
console.log(`O primeiro número é igual ao segundo?: ${num1 === num2}`);
console.log(`O primeiro número é divisível pelo segundo?: ${(num1 % num2) === 0}`);
console.log(`O segundo número é divisível pelo primeiro?: ${(num2 % num1) === 0}`);*/


/* Desafios */
// Exercício 1
//a
// let temperatura;
// temperatura = 77;
// let fahrenheitParaKelvin = (temperatura - 32)*(5/9) + 273.15;
// console.log(`${fahrenheitParaKelvin} K`);
// //b
// temperatura = 80;
// let celsiusParaFahrenheit = (temperatura)*(9/5) + 32;
// console.log(`${celsiusParaFahrenheit} °F`);
// //c
// temperatura = 30;
// celsiusParaFahrenheit = (temperatura)*(9/5) + 32;
// console.log(`${celsiusParaFahrenheit} °F`);

// fahrenheitParaKelvin = (celsiusParaFahrenheit - 32)*(5/9) + 273.15;
// console.log(`${fahrenheitParaKelvin} K`);
// //d
// temperatura = Number(prompt('Escreva aqui a temperatura em graus Celsius que você deseja converter *escreva apenas o número* '));
// celsiusParaFahrenheit = (temperatura)*(9/5) + 32;
// console.log(`${celsiusParaFahrenheit} °F`); 
// fahrenheitParaKelvin = (celsiusParaFahrenheit - 32)*(5/9) + 273.15;
// console.log(`${fahrenheitParaKelvin} K`);


// Exercício 3
/*let quilowattHora = 0.05;
let consumoMensal;
let consumoTotal = quilowattHora * consumoMensal;

consumoMensal = 280;
consumoTotal = quilowattHora * consumoMensal;
console.log(consumoTotal);

let consumoTotalDesconto = consumoTotal * 0.85
console.log(consumoTotalDesconto);*/

/*
let peso;
//a
peso = 20;
let libraParaQuilograma = peso * 0.45;
console.log(`${peso} libras equivalem aproximadamente a ${libraParaQuilograma} Kg `);
//b
peso = 10.5;
let oncaParaQuilograma = peso * 0.028;
console.log(`${peso} onças equivalem aproximadamente a ${oncaParaQuilograma} Kg `);

//c
let distancia;
distancia = 100;
let milhaParaMetro = distancia * 1609.34;
console.log(`${distancia} milhas equivalem aproximadamente a ${milhaParaMetro} metros`);
//d
distancia = 50;
let pesParaMetros = distancia * 0.3048;
console.log(`${distancia} pés equivalem aproximadamente a ${pesParaMetros}`);

//e
let pesoLiquido;
pesoLiquido = 103.56;
let galaoParaLitro = pesoLiquido * 3.78;
console.log(`${pesoLiquido} galões equivalem aproximadamente a ${galaoParaLitro} litros`);
//f
pesoLiquido = 450;
let xicaraParaLitro = pesoLiquido * 0.24;
console.log(`${pesoLiquido} xícaras equivalem aproximadamente a ${xicaraParaLitro} litros`);

//g
peso = Number(prompt('Insira aqui um valor para conversão: De libra para Quilograma'))
libraParaQuilograma = peso * 0.45;
console.log(`${peso} libras equivalem aproximadamente a ${libraParaQuilograma} Kg`);
*/
