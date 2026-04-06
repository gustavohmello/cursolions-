const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let proximoCarroId = 1;
let carros = [];
let clientes = []
let proximoClienteId = 1;

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
    console.log("6 - Cadastrar cliente ")
    console.log("7 - Listar clientes")
    console.log("8 - Buscar clientes por ID")
    console.log("9 - atualizar cliente")
    console.log("10 - Remover cliente")
    console.log("==========ALUGUEL===========")
    console.log("11 - Realizar aluguel")
    console.log("12 - devolver carro")
    console.log("13 - LIstar alugueis ativos")
    console.log("14 - Listar histórico (finalizados) ")
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
            case "4":
                atualizarCarros();
                break;
            case "5":
                removerCarro();
                break;
            case "6":
                cadastrarCliente();
                break;
            case "7":
                listarClientes();
                break;
            case "8":
                buscarClientesPorID();
                break;
            case "9":
                atualizarClientes();
                break;





        }
    });
};

function atualizarClientes() {
    console.log("atualizar clientes");

    rl.question("Digite o ID do cliente : ", (id) => {
        id = Number(id);

        let carro =  encontrarClientesPorID(id);

        if (carro === null) {
            console.log("Cliente não encontrado");
            mostrarMenu();
            return;

        }


            rl.question("Digite o seu id: ", (novoId) => {
                rl.question("Digite o novo nome", (novoNome) => {
                    rl.question("Digite o novo CPF", (novoCPF) => {
                        rl.question("digite o novo telefone", (novoTelefone) => {

                            novoId = Number(novoId);
                            novoCPF = Number(novoCPF);
                            novoTelefone = Number(novoTelefone);

                            if (novoNome === ""){
                                console.log("Erro ao digitar o nome");
                            }

                            if (novoId <= 0 || novoCPF <= 0 || novoTelefone <= 0 ) {
                                console.log("Informações invalidas ");
                                mostrarMenu();
                                return;
                            }
    
                            carro.novoId = novoId;
                            carro.novoNome = novoNome;
                            carro.novoCPF= novoCPF;
                            carro.novoTelefone = novoTelefone;
    
                            console.log("atualizando com sucesso");
                            mostrarMenu();
    





                        })

                    })

                })

            })

    })
}

function buscarClientesPorID() {
    console.log("busacar clientes por id");

    rl.question("Digite o seu ID: ", (id) => {
        id = Number(id)

        let cliente = encontrarClientesPorID(id);


        if (cliente === null) {
            console.log("Cliente não encontrado:");
            mostrarMenu();
            return;
        }
        console.log("\nID : ", + cliente.id)
        console.log("nome: ", cliente.nome)
        console.log("CPF : ", + cliente.CPF)
        console.log("telefone : ", + cliente.telefone)

        mostrarMenu();

    })
}

function encontrarClientesPorID(id) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            return clientes[i];
        }
    }

    return null;
}

function listarClientes() {
    console.log("listar clientes")

    if (clientes.length === 0) {
        console.log("Nenhum carro cadastrado!")
        mostrarMenu();
        return;
    }

    for (let i = 0; i < clientes.length; i++) {
        console.log("\nID : " + clientes[i].id)
        console.log("Nome: " + clientes[i].nome)
        console.log("Cpf: " + clientes[i].CPF)
        console.log("Telefone : " + clientes[i].telefone)
    }
    mostrarMenu();


}

function cadastrarCliente() {
    console.log("cadastrar clientes");

    rl.question("Digite seu ID: ", (idCliente) => {
        rl.question("Digite seu nome: ", (nome) => {
            rl.question("Digite seu CPF: ", (CPF) => {
                rl.question("DIgite seu telefone: ", (telefone) => {

                    idCliente = Number(idCliente);
                    CPF = Number(CPF);
                    telefone = Number(telefone);

                    if (nome === "") {
                        console.log("ERRO: Não preencheu todas as infos ");
                        mostrarMenu();
                        return;
                    }

                    if (idCliente <= 0 || CPF <= 0 || telefone <= 0) {
                        console.log("ERRO: info inválida");
                        mostrarMenu();
                        return;
                    }


                    let cliente = {
                        id: idCliente,
                        nome: nome,
                        CPF: CPF,
                        telefone: telefone

                    };

                    clientes.push(cliente)
                    idCliente++;

                    console.log(" cliente Cadastrado com sucesso")
                    mostrarMenu();




                })
            })
        })


    })


}

function removerCarro() {
    console.log("remor carro")

    rl.question("Digite o ID do carro:  ", (id) => {
        id = Number(id);

        let aluno = encontrarCarroPorId(id);

        if (carros === null) {
            console.log("Carro não encontrado")
            mostrarMenu();
            return;
        }

        for (let i = 0; i < carros.length; i++) {

            if (carros[i].id === id) {
                carros.splice(i, 1)

            }

        }

        console.log("Aluno removido com sucesso", carros);

        mostrarMenu();


    })
}




function atualizarCarros() {
    console.log("Atualizar Carros");

    rl.question("Digite o ID do carro: ", (id) => {
        id = Number(id);

        let carro = encontrarCarroPorId(id);

        if (carro === null) {
            console.log("Carro não encontrado");
            mostrarMenu();
            return;
        }

        rl.question("Digite um novo modelo: ", (novoModelo) => {
            rl.question("Digite a nova placa: ", (novaPlaca) => {
                rl.question("Digite o novoAno : ", (novoAno) => {
                    rl.question("Digite a novo preço por dia: ", (novoPrecoPorDIa) => {
                        novoModelo = Number(novoModelo);
                        novaPlaca = Number(novaPlaca);
                        novoAno = Number(novoAno);
                        novoPrecoPorDIa = Number(novoPrecoPorDIa);


                        if (novaPlaca <= 0 || novoModelo <= 0 || novoAno <= 0 || novoPrecoPorDIa <= 0) {
                            console.log("Alguma informação invalida ");
                            mostrarMenu();
                            return;
                        }

                        carro.novoModelo = novoModelo;
                        carro.novaPlaca = novaPlaca;
                        carro.novoAno = novoAno;
                        carro.novoPrecoPorDIa = novoPrecoPorDIa;

                        console.log("atualizando com sucesso");
                        mostrarMenu();

                    })
                })
            })
        })

    })

}



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
        console.log("Modelo: " + carros[i].modelo)
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
            console.log("Carro não encontrado:");
            mostrarMenu();
            return;
        }
        console.log("\nID : ", + carro.id)
        console.log("placa: ", + carro.placa)
        console.log("ano : ", + carro.ano)
        console.log("Preço por dia: ", + carro.precoPorDia)

        mostrarMenu();

    });


}

function encontrarCarroPorId(id) {
    for (let i = 0; i < carros.length; i++) {
        if (carros[i].id === id) {
            return carros[i];
        }
    }

    return null;

}



mostrarMenu();
