// // EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
// /* 
// 1.
// a. verifica se o número é par
// b. números pares
// c. números ímpares

// 2.
// a. para informar o valor da fruta digitada,
// b. se a fruta for maça será impresso no console o valor de R$ 2.25
// c. Iria imprimir o próximo preço, onde há o break 

// 3.
// a. guardando o número digitado pelo usuário na variável numero
// b.  10 > 0: "Esse numero passou no teste" / - 10 < 0: não aparece nada
// c. a variável mensagem aparece como não definida pois o código está chamando no escopo global e ela está no local
// */

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
let valorIngressoDoFilme = Number(prompt('Qual o valor do ingresso?'));

if (generoFilme === 'fantasia' && valorIngressoDoFilme < 15) {
    console.log('Bom filme!');
} else {
    console.log('Escolha outro filme :(');
}

////DESAFIOS
////1
let generoDoFilme = prompt('Qual o gênero do filme?').toLowerCase();
let valorIngressoFilme = Number(prompt('Qual o valor do ingresso?'));

if (generoDoFilme === 'fantasia' && valorIngressoFilme < 15) {
    console.log('Bom filme!')
    let lanchinho = prompt('Qual será o seu lanche?').toLowerCase();
    console.log(`Aproveite o seu/ a sua ${lanchinho}!`);
} else {
    console.log('Escolha outro filme :(');
}

// //2
let nomeCompleto = prompt('Digite aqui seu nome').toUpperCase();
let tipoDeJogo = prompt('IN: Para internacional || DO: Para doméstico').toUpperCase();
let etapaDoJogo = prompt('SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final').toUpperCase();
let categoriaDoJogo = Number(prompt('Digite a categoria desejada: 1, 2, 3 ou 4'));
let quantidadeDeIngressos = Number(prompt('Digite a quantidade de ingressos:'));
let valorIngresso;
let dolar = 4.1;

if (etapaDoJogo === 'SF') { // Jogos da Semifinal
    if (categoriaDoJogo === 1) {
        valorIngresso = 1320
    } else if (categoriaDoJogo === 2) {
        valorIngresso = 880
    } else if (categoriaDoJogo === 3) {
        valorIngresso = 550
    } else if (categoriaDoJogo === 4) {
        valorIngresso = 220
    }
} else if (etapaDoJogo === 'DT') { // Jogos da decisão de terceiro lugar
    if (categoriaDoJogo === 1) {
        valorIngresso = 660
    } else if (categoriaDoJogo === 2) {
        valorIngresso = 440
    } else if (categoriaDoJogo === 3) {
        valorIngresso = 330
    } else {
        valorIngresso = 170
    }
} else if (etapaDoJogo === 'FI') { // Jogos da Final
    if (categoriaDoJogo === 1) {
        valorIngresso = 1980
    } else if (categoriaDoJogo === 2) {
        valorIngresso = 1320
    } else if (categoriaDoJogo === 3) {
        valorIngresso = 880
    } else if (categoriaDoJogo === 4) {
        valorIngresso = 330
    }
} else {
    console.log('algo não está certo:(');
}


console.log(`
--- Dados de compra ---
Nome do cliente: ${nomeCompleto}
Tipo de jogo: ${tipoDeJogo}
Etapa do jogo: ${etapaDoJogo}
Categoria do Jogo: ${categoriaDoJogo}
Quantidade de Ingressos: ${quantidadeDeIngressos}`)

if (tipoDeJogo === 'DO') {
    console.log(`
--- Valores --- 
Valor do ingresso: R$ ${valorIngresso }
Valor total: R$ ${valorIngresso * quantidadeDeIngressos}`)
} else {
    console.log(`--- Valores --- 
Valor do ingresso: US ${(valorIngresso / dolar).toFixed(2)}
Valor total: U$ ${((valorIngresso * quantidadeDeIngressos) / dolar).toFixed(2)}`);
}
