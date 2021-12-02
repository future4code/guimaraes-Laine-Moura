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

console.log(returnNomeCachorro)

// b - cria um novo array apenas com os cachorros salsicha

const returnCachorroSalsicha = pets.filter((item, index, array) => {
    return item.raca === "Salsicha"
})

console.log(returnCachorroSalsicha)

// c - Cria um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


const returnPoodlePromo = pets.filter((item) => {
    if (item.raca === "Poodle")
    return item.nome
        
})

const mensagem = returnPoodlePromo.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})


console.log(mensagem);


