// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort(function (a, b) {
        return a - b
    })
    return array
} // https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona?gclid=Cj0KCQiAqbyNBhC2ARIsALDwAsDfWo1sb2hXP5EYPTw2JIeGSMMitFRrgmf51FP3KXA_rgu3D4czSGAaAjaHEALw_wcB

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = [];
    for (const i of array) {
        if (i % 2 === 0)
            arrayPares.push(i)
    }
    return arrayPares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = [];
    for (const e of array) {
        if (e % 2 === 0)
            arrayPares.push(e * e)

    }
    return arrayPares

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    return Math.max(...array)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero = undefined;
    let menorNumero = undefined;
    let maiorDivisivelPorMenor = undefined;
    let diferenca = undefined;
    //{"maiorNumero":30,"maiorDivisivelPorMenor":true,"diferenca":15}

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2
    } else {
        maiorNumero = num2;
        menorNumero = num1
    }

    if (maiorNumero % menorNumero === 0) {
        maiorDivisivelPorMenor = true;
    } else {
        maiorDivisivelPorMenor = false;
    }

    diferenca = maiorNumero - menorNumero

    return {
        "maiorNumero": maiorNumero,
        "maiorDivisivelPorMenor": maiorDivisivelPorMenor,
        "diferenca": diferenca
    }

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return 'Equilátero'
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function (a, b) {
        return a - b
    })

    let menor = array[1];
    let maior = array[array.length - 2];
    array = [maior, menor]

    return array
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    //11
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    //12
    let objeto = {
        ...pessoa
    }

    return {
        'nome': "ANÔNIMO",
        'idade': objeto.idade,
        'email': objeto.email,
        'endereco': objeto.endereco
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    let autorizadas = pessoas.filter((pessoa) => {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return autorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoAutorizadas = pessoas.filter((pessoa) => {
        return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return naoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    let somaCompras = undefined;
    for (const conta of contas) {
        somaCompras = conta.compras.reduce((soma, i) => {
            soma += i
            return soma

        });
        conta.saldoTotal -= somaCompras


        conta.compras = []

        return contas
    }
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function (a, b) {
        return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
    })
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let consulta of consultas)

        consulta.dataDaConsulta = consulta.dataDaConsulta.split('/').reverse().toString().replaceAll(',', '');
    // trata os valores da propriedade dataDaConsulta tirando a /, invertendo os itens do array (colocando no formato americano de data), transformando em string e substituindo as ',' por '' (espaço vazio).

    consultas.sort(function (a, b) {
        return (a.dataDaConsulta > b.dataDaConsulta) ? 1 : ((b.dataDaConsulta > a.dataDaConsulta) ? -1 : 0);
    })

    //operador ternário para execução da lógica de comparação como função do método .sort
    // referência:  https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona

    for (let indice of consultas)
        indice.dataDaConsulta = indice.dataDaConsulta.replace(/^(\d{4})(\d{2})(\d{2}).*/, '$3/$2/$1');
    
    //referência
    //https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex?gclid=CjwKCAiAksyNBhAPEiwAlDBeLChvjmDkn1F5AFwjNBIlLtx72BF9WuAyrDPctrBI75GhFm5S1V7W_RoCgOQQAvD_BwE

    return consultas
}