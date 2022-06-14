function nomeEData(nome:string, data:string ):string {
    let dataSeparada = data.split("/",3)
    return `Olá me chamo ${nome}, nasci no dia ${dataSeparada[0]} do mês ${dataSeparada[1]} do ano de ${dataSeparada[2]} `
}
console.log(nomeEData("Laíne","08/06/1991"))
