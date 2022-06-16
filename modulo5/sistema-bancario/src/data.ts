export type Client = {
  name:string,
  cpf: string,
  birthday: string,
  balance: number,
  bankTransaction: Transaction[]
}

export type Transaction = {
  date: string,
  value: number,
  description: string
}

export let clients:Client[] = [
  {
    name: "Camila Coradi",
    cpf: "33041288054",
    birthday: "19/07/1990",
    balance: 100000000000,
    bankTransaction: []
},
{
    name: "Caio Porto",
    cpf: "55422588930",
    birthday: "19/07/1989",
    balance: 30000000,
    bankTransaction: []
},
{
    name: "Lucas Aversi",
    cpf: "11044011487",
    birthday: "26/02/1992",
    balance: 45000000,
    bankTransaction: []
},
{
    name: "Tiago Hennig",
    cpf: "22558741368",
    birthday: "10/12/1993",
    balance: 50000000,
    bankTransaction: []
}
]
