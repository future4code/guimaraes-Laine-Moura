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
let valorIngresso = Number(prompt('Qual o valor do ingresso?'));

if (generoFilme === 'fantasia' && valorIngresso < 15) {
    console.log('Bom filme!');
} else {
    console.log('Escolha outro filme :(');
}

////DESAFIOS
////1
let generoFilme = prompt('Qual o gênero do filme?').toLowerCase();
let valorIngresso = Number(prompt('Qual o valor do ingresso?'));

if (generoFilme === 'fantasia' && valorIngresso < 15) {
    console.log('Bom filme!')
    let lanchinho = prompt('Qual será o seu lanche?').toLowerCase();
    console.log(`Aproveite o seu/ a sua ${lanchinho}!`);
} else {
    console.log('Escolha outro filme :(');
}

//2
let nomeCompleto = prompt('Digite aqui seu nome').toUpperCase();
let tipoDeJogo = prompt('IN: Para internacional || DO: Para doméstico').toUpperCase();
let etapaDoJogo = prompt('SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final').toUpperCase();
let categoriaDoJogo = Number(prompt('Digite a categoria desejada: 1, 2, 3 ou 4'));
let quantidadeDeIngressos = Number(prompt('Digite a quantidade de ingressos:'));
let valorIngresso;
let dolar = 4.1;

let tipoDeJogoDomestico = {
    semifinais: {
        categoria1: 1320,
        categoria2: 880,
        categoria3: 550,
        categoria4: 220,
    },
    decisaoTerceiroLugar: {
        categoria1: 660,
        categoria2: 440,
        categoria3: 330,
        categoria4: 170,
    },
    final: {
        categoria1: 1980,
        categoria2: 1320,
        categoria3: 880,
        categoria4: 330,
    },
}

if (etapaDoJogo === 'SF') { // Jogos da Semifinal
     if (categoriaDoJogo === 1) {
        valorIngresso = tipoDeJogoDomestico.semifinais.categoria1
    } else if (categoriaDoJogo === 2) {
        valorIngresso = tipoDeJogoDomestico.semifinais.categoria2
    } else if (categoriaDoJogo === 3) {
        valorIngresso = tipoDeJogoDomestico.semifinais.categoria3
    } else if (categoriaDoJogo === 4) {
        valorIngresso = tipoDeJogoDomestico.semifinais.categoria4
    }
} else if (etapaDoJogo === 'DT') { // Jogos da Semifinal
     if (categoriaDoJogo === 1) {
        valorIngresso = tipoDeJogoDomestico.decisaoTerceiroLugar.categoria1
    } else if (categoriaDoJogo === 2) {
        valorIngresso = tipoDeJogoDomestico.decisaoTerceiroLugar.categoria2
    } else if (categoriaDoJogo === 3) {
        valorIngresso = tipoDeJogoDomestico.decisaoTerceiroLugar.categoria3
    } else if (categoriaDoJogo === 4) {
        valorIngresso = tipoDeJogoDomestico.decisaoTerceiroLugar.categoria4
    }
} else if (etapaDoJogo === 'FI') { // Jogos da Semifinal
     if (categoriaDoJogo === 1) {
        valorIngresso = tipoDeJogoDomestico.final.categoria1
    } else if (categoriaDoJogo === 2) {
        valorIngresso = tipoDeJogoDomestico.final.categoria2
    } else if (categoriaDoJogo === 3) {
        valorIngresso = tipoDeJogoDomestico.final.categoria3
    } else if (categoriaDoJogo === 4) {
        valorIngresso = tipoDeJogoDomestico.final.categoria4
    }
} else {
    console.log('algo não está certo:(');
}

if (tipoDeJogo === 'DO') {
    console.log(`
--- Dados de compra ---
Nome do cliente: ${nomeCompleto}
Tipo de jogo: ${tipoDeJogo}
Etapa do jogo: ${etapaDoJogo}
Categoria do Jogo: ${categoriaDoJogo}
Quantidade de Ingressos: ${quantidadeDeIngressos}
--- Valores --- 
Valor do ingresso: R$ ${valorIngresso }
Valor total: R$ ${valorIngresso * quantidadeDeIngressos} `)
} else {
    console.log(`
--- Dados de compra ---
Nome do cliente: ${nomeCompleto}
Tipo de jogo: ${tipoDeJogo}
Etapa do jogo: ${etapaDoJogo}
Categoria do Jogo: ${categoriaDoJogo}
Quantidade de Ingressos: ${quantidadeDeIngressos}
--- Valores --- 
Valor do ingresso: US ${(valorIngresso * dolar).toFixed(2)}
Valor total: U$ ${(valorIngresso * quantidadeDeIngressos * dolar).toFixed(2)}`)
}