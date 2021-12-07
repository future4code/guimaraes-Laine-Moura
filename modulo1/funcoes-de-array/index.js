// Exercício de interepretação de código
/*
//1
Cria uma nova array com o resultado da chamada de uma função para cada elemento da array

//2
Imprimirá um array com os nomes

//3
Imprimirá os arrays que não contém o valor 'Chijo'
*/

//Exercícios de escrita de código
//1
const pets = [{
        nome: "Lupin",
        raca: "Salsicha"
    },
    {
        nome: "Polly",
        raca: "Lhasa Apso"
    },
    {
        nome: "Madame",
        raca: "Poodle"
    },
    {
        nome: "Quentinho",
        raca: "Salsicha"
    },
    {
        nome: "Fluffy",
        raca: "Poodle"
    },
    {
        nome: "Caramelo",
        raca: "Vira-lata"
    },
]

// a - cria um novo array que contenha apenas o nome dos doguinhos
const returnNomeCachorro = pets.map((item, index, array) => {
    return item.nome
})

//console.log(returnNomeCachorro)

// b - cria um novo array apenas com os cachorros salsicha

const returnCachorroSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})

//console.log(returnCachorroSalsicha)

// c - Cria um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


const returnPoodlePromo = pets.filter((item) => {
   if (item.raca === "Poodle")
      return item.nome

})

const mensagem = returnPoodlePromo.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})


//console.log(mensagem);

//2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//console.log(produtos);

// a - Cria um novo array que contém apenas o nome de cada item
 const nomeProdutos = produtos.map((item) => {
    return item.nome
})
//console.log(nomeProdutos)


// b - Cria um novo array que contém um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles 
const produtosDesconto = produtos.map((item) => {
    return {
        nome: item.nome,
        preco: (item.preco * 0.95).toFixed(2)
    }
  })
  console.log(produtosDesconto);


// c - Crie um novo array que contenha apenas os objetos da categoria Bebidas
const arrBebidas = produtos.filter((item) => {
    return item.categoria === "Bebidas"
})
//console.log(arrBebidas);

