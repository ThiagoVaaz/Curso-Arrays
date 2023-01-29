const numeros = [100, 200, 300, 500, 600];


//1º expressao: é executada uma única vez
//2º expressão: condição de execução
//3º expressão: é execuada sempre ao final do bloco

for(let indice = 0; indice < numeros.length; indice++) {
   // console.log(numeros[indice]);
}




const notas = [10, 6.5, 8, 7.5];
somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;
console.log(media);