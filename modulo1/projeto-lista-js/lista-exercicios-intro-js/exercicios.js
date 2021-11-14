// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = Number(prompt('Insira aqui um número'));
  largura = Number(prompt('Insira aqui um número'));
  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt('Em que ano estamos?'));
  anoNascimento = Number(prompt('Em que ano você nasceu?'));
  console.log((anoAtual - anoNascimento))

}

// EXERCÍCIO 03
function calculaIMC(peso, altura, IMC) {
  // implemente sua lógica aqui
  IMC = peso / (altura * altura)

  return IMC

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // 'Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL.'
  nome = prompt('Insira aqui seu nome');
  idade = Number(prompt('Insira aqui sua idade'));
  email = prompt('Insira aqui seu email');

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(corFavorita1, corFavorita2, corFavorita3) {
  // implemente sua lógica aqui
  corFavorita1 = prompt('Diga uma cor favorita');
  corFavorita2 = prompt('Diga uma cor favorita');
  corFavorita3 = prompt('Diga uma cor favorita');

  console.log([corFavorita1, corFavorita2, corFavorita3]);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso, ingressosNecessarios) {
  // implemente sua lógica aqui
  ingressosNecessarios = custo / valorIngresso

  return ingressosNecessarios

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, array0) {
  // implemente sua lógica aqui
  array0 = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = array0

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = string1.toUpperCase();
  string2 = string2.toUpperCase();

  return string1 === string2

}


// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoDeNascimento, anoEmissaoIdentidade) {
  // implemente sua lógica aqui 
  anoAtual = Number(prompt("Digite o ano em que estamos"))
  anoDeNascimento = Number(prompt("Digite o ano do seu nascimento"))
  anoEmissaoIdentidade = Number(prompt("Qual o ano da emissão da sua identidade?"))

  // será necessário calcular os parâmetros das condições: idade da pessoa e 'idade'/tempo da carteira de identidade
  let idade = anoAtual - anoDeNascimento
  let dataIdentidade = anoAtual - anoEmissaoIdentidade

  if (20 >= idade && dataIdentidade >= 5) {
    console.log(true)
  } else if (idade >= 20 && idade <= 50 && dataIdentidade >= 10) {
    console.log(true)
  } else if (idade >= 50 && dataIdentidade >= 15) {
    console.log(true)
  } else {
    console.log(false)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui 
  if (ano % 4 === 0 && ano % 100 !== 0) {
    return true
  } else if (ano % 4 !== 0 && ano % 400 === 0) {
    return true
  } else if (ano % 4 === 0 && ano % 400 === 0) {
    return true
  } else {
    return false
  }
} // fonte: https://escolakids.uol.com.br/matematica/calculo-do-ano-bissexto.htm

// EXERCÍCIO 15
// function checaValidadeInscricaoLabenu(idade, ensino, disponibilidade) {
//   // implemente sua lógica aqui
//   idade = prompt('tem mais de 18?');
//   ensino = prompt('tem ensino médio completo?');
//   disponibilidade = prompt('tem disponibilidade de horários?');

//   if (((idade && ensino) && disponibilidade) === 'sim'){
//     console.log(true);
//   } else {
//     console.log(false);
//   }

// }

function checaValidadeInscricaoLabenu(idade, ensino, disponibilidade) {
  // implemente sua lógica aqui 
  idade = prompt('Você tem mais de 18 anos?')
  if (idade === 'sim') {
    idade = true
  } else {
    idade = false
  }
  ensino = prompt('Você possui ensino médio completo?')
  if (ensino === 'sim') {
    ensino = true
  } else {
    ensino = false
  }
  disponibilidade = prompt('Você possui disponibilidade de horário?')
  if (disponibilidade === 'sim') {
    disponibilidade = true
  } else {
    disponibilidade = false
  }
  if (idade && ensino && disponibilidade === true) {
    console.log(true)
  } else {
    console.log(false)
  }
}