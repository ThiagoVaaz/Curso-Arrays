const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numerosPares, ...numerosImpares] // ..."concatena os arrays com ressalvas"

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5, 6, 7, 8, 9] //... vai pegar o valor da const e jogar na const

console.log(num1, num2, outrosNumeros);

const [nome1 = 'Ju'] = []
console.log(nome1)

const pessoa = {
    nome: "Ju",
    idade: 25
}

const pessoaComTelefone = {
    ...pessoa, telefone: 22444412346
}

console.log(pessoa, pessoaComTelefone)


const {idade} = pessoa;  //pegou idade da const pessoa e transformou em variável 

console.log(idade);

function imprimeDados({nome, idade}) {
    console.log(nome, idade)
}

imprimeDados(pessoa)