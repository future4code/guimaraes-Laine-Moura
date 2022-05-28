enum setores {
    MARKETING="Marketing",
    VENDAS="Vendas",
    FINANCEIRO="Financeiro"
}


type ArrayInfoFuncionarios = {
	nome: string,
	salário: number,
	setor:string,
	presencial: boolean
}

let array: ArrayInfoFuncionarios[]   = [
	{ nome: "Marcos", salário: 2500, setor: setores.MARKETING, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setores.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setores.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setores.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setores.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setores.MARKETING, presencial: true }
]


let buscaMarktPresencial = (array: ArrayInfoFuncionarios[]) => {
	let funcMarktPresencial = array.filter(
		(arr) => {return arr.setor === setores.MARKETING && arr.presencial === true}
	)
	return funcMarktPresencial
}
