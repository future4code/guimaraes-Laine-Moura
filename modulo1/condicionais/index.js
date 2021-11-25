// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* 
1.
a. verifica se o número é par
b. números pares
c. números ímpares

2.
a. para informar o valor da fruta digitada,
b. se a fruta for maça será impresso no console o valor de R$ 2.25
c. Iria imprimir o próximo preço, onde há o break 

3.
a. guardando o número digitado pelo usuário na variável numero
b.  10 > 0: "Esse numero passou no teste" / - 10 < 0: não aparece nada
c. a variável mensagem aparece como não definida pois o código está chamando no escopo global e ela está no local
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1
let idade = Number(prompt('Qual é a sua idade?'));

if (idade >= 18) {
    console.log('Você pode dirigir');
} else {
    console.log('Você não pode dirigir');
}

//2
let turno = prompt('Em qual turno você estuda? Digite: M (matutino) ou V (Vespertino) ou N (Noturno)').toUpperCase();

if (turno === "M") {
    console.log('Bom dia!');
} else if (turno === 'V') {
    console.log('Boa tarde!');
} else if (turno === 'N') {
    console.log('Boa noite!');
} else {
    console.log('Digite uma letra válida!');
}

//3
let turnoDoAluno = prompt('Em qual turno você estuda? Digite: M (matutino) ou V (Vespertino) ou N (Noturno)').toUpperCase();

switch (turnoDoAluno) {
    case "M":
        console.log('Bom dia!')
        break;
    case "V":
        console.log('Boa tarde!')
        break;
    case "N":
        console.log('Boa noite!')
        break;
    default:
        console.log('Digite uma letra válida!');
}

//4
let generoFilme = prompt('Qual o gênero do filme?').toLowerCase();
let valorIngresso = Number(prompt('Qual o valor do ingresso?'));

if (generoFilme === 'fantasia' && valorIngresso < 15) {
    console.log('Bom filme!!!');
} else {
    console.log('Escolha outro filme!');
}

