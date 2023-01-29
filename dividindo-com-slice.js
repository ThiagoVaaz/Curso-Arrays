const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 
'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 
'Renata', 'Daisy', 'Camilo']

/*slice = fatiar*/
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2) // sem o 2º parametro = índice nº10 até o final
//não altera array mas retorna numa variável

console.log(sala1);
console.log(sala2);



//////////////////////////////////////////