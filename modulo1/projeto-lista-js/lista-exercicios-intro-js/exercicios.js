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
   console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
   // implemente sua lógica aqui
  anoAtual = Number(prompt('Em que ano estamos?'));
  anoNascimento = Number(prompt('Em que ano você nasceu?'));
  console.log((anoAtual-anoNascimento))

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
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
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
 ingressosNecessarios =  custo / valorIngresso 

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
  array[0] = array[array.length-1]
  array[array.length-1] = array0

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
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}