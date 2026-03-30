const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let proximoID = 1;
let alunos = [];

function mostrarMenu() {
    console.log("\n=========================")
    console.log("SISTEMA ESCOLAR")
    console.log("\=========================")
    console.log("1 - cadastrar aluno")
    console.log("2 - listar aluno")
    console.log("3 - buscar po ID")
    console.log("4 - Atualizar Aluno")
    console.log("5 - Remover Aluno")
    console.log("6 - Mostrar Alunos Aprovados")
    console.log("7 - Mostrar Alunos Reprovados")
    console.log("0 - Sair")
    console.log("==========================")

    rl.question('Escolha uma opção: ', (opcao) => {
        if (opcao === "1") {
            cadastrarAluno();
        } else if (opcao === "2") {
            listarAluno();
        } else if (opcao === "3") {
            buscarAlunoPorId();
        }

    })
}

function listarAluno() {
    console.log("Listar alunos: ");

    if (alunos.lengthg === 0) {
        console.log("Nenhum aluno cadastrado");
        mostrarMenu();
        return;
    }

    for (let i = 0; i < alunos.length; i++) {
        console.log("\nID" + alunos[i].id);
        console.log("Nome" + alunos[i].nome);
        console.log("Idade" + alunos[i].idade);
        console.log("turma" + alunos[i].turma);
        console.log("nota" + alunos[i].nota);
    }

    mostrarMenu();

}

function cadastrarAluno() {
    console.log("Cadastrar Aluno")

    rl.question("digite o nome do aluno: ", (nome) => {
        rl.question("Digite a idade do  aluno: ", (idade) => {
            rl.question("Digite a turma do aluno: ", (turma) => {
                rl.question("Digite a nota do aluno: ", (nota) => {
                    idade = Number(idade);
                    nota = Number(nota);

                    if (nome === "" || idade === "" || turma === "" || nota === "") {
                        console.log("ERRO: Não preencheu todas as infos ");
                        mostrarMenu();
                        return;
                    }

                    if (idade <= 0 || nota <= 0 || nota > 10) {
                        console.log("ERRO: Idade ou nota inválida");
                        mostrarMenu();
                        return;
                    }

                    let aluno = {
                        id: proximoID,
                        nome: nome,
                        idade: idade,
                        turma: turma,
                        nota: nota
                    };

                    alunos.push(aluno)
                    proximoID++;

                    console.log(" Aluno Cadastrado com sucesso")
                    mostrarMenu();



                })
            })

        })
    })
}

function buscarAlunoPorId() {
    console.log("Buscar aluno por Id");

    rl.question("Digite o Id do aluno: ", (id) => {
        id = Number(id);

        let aluno = encontrarAlunoPorId(id);

        if(alunos === null){
            console.log("Aluno não encontrado:");
            mostrarMenu();
            return;
        }

        console.log("\nAluno Encontrado")
        console.log("ID: " + aluno.id);
        console.log("Nome: " + aluno.nome);
        console.log("Idade: " + aluno.idade);
        console.log("turma: " + aluno.turma);
        console.log("nota: " + aluno.nota);

        mostrarMenu();
    })
}

function encontrarAlunoPorId(id) {
    for(let i = 0; i < alunos.length; i++) {
        if(alunos[i].id === id) {
            return alunos [i];
        }
    }

    return null;

}

mostrarMenu();