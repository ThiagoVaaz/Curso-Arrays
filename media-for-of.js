const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) { //for of funciona onde quer se percorrer um array do inicio ao fim
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(media);

