const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//notas.forEach(function(){ //imprime oi 5vzs
//    console.log("oi");
//});

notas.forEach(function(nota){      //dá o valor e o índice 
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(media);



