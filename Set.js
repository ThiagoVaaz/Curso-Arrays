const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

//transfrmando em array de novo
const nomesAtualizados = [...meuSet]

console.log(nomesAtualizados);