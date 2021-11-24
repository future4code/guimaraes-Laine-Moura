// EXERCÍCIOS DE INTEPRETAÇÃO DE CÓDIGO
/*
//1-
//a.
Matheus Nachtergaele
Virginia Cavendish
{ canal: 'Globo', horario: '14h' }

//2
//a.
{idade: 3, nome: "Juca", raca: "SRD"}
{idade: 3, nome: "Juba", raca: "SRD"}
{idade: 3, nome: "Jubo", raca: "SRD"}

b. Faz cópia de um objeto ou array inteiro

//3
//a.
false
undefined
b. Foi chamadado 'backender' e ele tem um valor falso, por isso retornou falso. E a propriedade altura não foi definida, 
sem atribuição de valor.
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
/*
//1
//a.*/
// let animaisFofinhos = {
//     nome: 'Pooh',
//     apelidos: ['ursinho', 'fofinho', 'amarelinho']};

// function bichinhos(animal) {
//     return `Esse é o ursinho: ${animal.nome}. Também é chamado de: ${animal.apelidos}.`
// }
// console.log(bichinhos(animaisFofinhos));


// //  //b.

// let novosAnimais = {
//     ...animaisFofinhos,
//     apelidos: ['pequeno', 'pelúcia', 'bichinho']
// }
// console.log(bichinhos(novosAnimais));
 

//2
//a e b
// let pessoa1 = {
//     nome: 'Gabi',
//     idade: 28,
//     profissao: 'enfermeira'
// }

// let pessoa2 = {
//     nome: 'Marcos',
//     idade: 30,
//     profissao: 'eletricista'
// }

// function retornaDados(pessoa) {
//     return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]  
// } 
// console.log(retornaDados(pessoa1));
// console.log(retornaDados(pessoa2));

 //3
// let carrinho = [];
// let frutas = [
//     {nome: 'maçã', disponilidade: true},
//     {nome: 'banana', disponilidade: true},
//     {nome: 'jabuticaba', disponilidade: true},
// ]

// function temFruta(fruta) {  
//     carrinho.push(fruta); 
//     return carrinho
// }
// temFruta(frutas[0]);
// temFruta(frutas[1]);
// temFruta(frutas[2]);

// console.log(carrinho);
