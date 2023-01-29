const notas = [10, 9.5, 8, 7, 6 ];
const notaMaxima = 10;


const notasAtualizadas = notas.map((nota) => {  //função callback
    return nota + 1 >= 10 ? 10 : nota+1;
})

console.log(notasAtualizadas);
