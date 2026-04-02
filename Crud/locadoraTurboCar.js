const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n===========================")
    console.log("LOCADORA TURBO CARS")
    console.log("\======CADASTRAR=CARROS======")
    console.log("1 - cadastrar carro")
    console.log("2 - listar carro")
    console.log("3 - buscar carro por ID")
    console.log("4 - Atualizar carro")
    console.log("5 - Remover Carro")
    console.log("==========CLIENTES===========")
    console.log("Cadastrar cliente ")
    console.log("Listar clientes")
    console.log("Buscar clientes por ID")
    console.log("atualizar cliente")
    console.log("Remover cliente")
    console.log("==========ALUGUEL===========")
    console.log("Realizar aluguel")
    console.log("devolver carro")
    console.log("LIstar alugueis ativos")
    console.log("Listar histórico (finalizados) ")
    console.log("0 - Sair")
    console.log("============================")

    rl.question("escolha uma opção: ", (opcao) => {
        switch (opcao) {

            case "1":
                cadastrarCarro();
                break;
            case "2":
                listarCarros();
                break;
            case "3":
                buscarCarroPorId();
                break;
        }
    });
};

let proximoCarroId = 1;
let carros = [];



function cadastrarCarro() {

    rl.question("qual o modelo? ", (modelo) => {
        rl.question("qual a placa? ", (placa) => {
            rl.question("qual o ano? ", (ano) => {
                rl.question("preco Por Dia? ", (precoPorDia) => {

                    ano = Number(ano);
                    proximoCarroId = Number(proximoCarroId);
                    precoPorDia = Number(precoPorDia);



                    if (modelo === "" || placa === "" || ano === "" || precoPorDia === "") {
                        console.log("ERRO: não preencheu todas as infos ");
                        mostrarMenu();
                        return;
                    }

                    if (placa.length > 7 || placa.length < 7) {
                        console.log("ERRO: placa incompleta ou incorreta")
                        mostrarMenu();
                        return;
                    }

                    if (precoPorDia < 0 || ano < 1900) {
                        console.log("ERRO: informações incorretas")
                        mostrarMenu();
                        return;
                    }

                    let carro = {
                        id: proximoCarroId,
                        modelo: modelo,
                        placa: placa,
                        ano: ano,
                        precoPorDia: precoPorDia
                    };

                    carros.push(carro);
                    proximoCarroId++;

                    console.log("Carro cadastrado com sucesso!")
                    mostrarMenu();

                })
            })
        })
    })





}

function listarCarros() {
    console.log("Listar carros: ")

    if (carros.length === 0) {
        console.log("Nenhum carro cadastrado!")
        mostrarMenu();
        return;
    }

    for (let i = 0; i < carros.length; i++) {
        console.log("\nID : " + carros[i].id)
        console.log("placa: " + carros[i].placa)
        console.log("ano : " + carros[i].ano)
        console.log("Preço por dia: " + carros[i].precoPorDia)
    }

    mostrarMenu();


}


function buscarCarroPorId() {
    console.log("Buscar carro por id");

    rl.question("Digite o id do carro: ", (id) => {
        id = Number(id);

        let carro = encontrarCarroPorId(id)



        if (carros === null) {
            console.log("Aluno não encontrado:");
            mostrarMenu();
            return;
        }
            console.log("\nID : " + carro.id)
            console.log("placa: " + carro.placa)
            console.log("ano : " + carro.ano)
            console.log("Preço por dia: " + carro.precoPorDia)
        
        mostrarMenu();

    });


}

function encontrarCarroPorId(id) {
    for (let i = 0; i < carros.length; i++){
        if (carros[i].id === id ){
            return carros[i];
        }
    }

   return null;

}



mostrarMenu();
