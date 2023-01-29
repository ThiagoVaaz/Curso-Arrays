const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(`A aluno(a) da 1º posição da lista de alunos é ${listaDeAlunosEMedias[0][1]}.
A nota desse(a) aluno(a) é ${listaDeAlunosEMedias[1][1]}`) //Juliana - 8

/*O primero parametro índice se refere a listaDeAlunosEMedias*/

console.log(`O aluno(a) da 3º posição da lista de alunos é ${listaDeAlunosEMedias[0][2]}.
A nota desse(a) aluno(a) é ${listaDeAlunosEMedias[1][2]}`) //Caio - 7.5