const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado`);
        
        //const indice = listaDeAlunosEMedias[0].indexOf(aluno); // .indexOf referencia a function exibeNomeENota 
        //const mediaDoAluno = listaDeAlunosEMedias[1][indice];
            
            //OU

        //const alunos = listaDeAlunosEMedias[0];
        //const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        //const mediaDoAluno = listaDeAlunosEMedias[1][indice];

            //OU

        const [alunos, medias] = listaDeAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];        


        console.log(`O aluno(a) ${aluno} tem a média de ${mediaDoAluno}`);
    
    } else {
        console.log("Aluno não encontrado");
    }
}

exibeNomeENota("Caio");