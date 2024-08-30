/*Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/ 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificarIdade() {
    rl.question("Digite uma idade (ou 'x' para encerrar): ", function(input) {
        if (input.toLowerCase() === 'x') {
            console.log("Programa encerrado.");
            rl.close();
        } else {
            const idade = parseInt(input);

            if (!isNaN(idade)) {
                if (idade >= 0 && idade <= 12) {
                    console.log("Criança");
                } else if (idade >= 13 && idade <= 17) {
                    console.log("Adolescente");
                } else if (idade >= 18 && idade <= 64) {
                    console.log("Adulto");
                } else if (idade >= 65) {
                    console.log("Idoso");
                } else {
                    console.log("Idade inválida");
                }
            } else {
                console.log("Por favor, insira uma idade válida.");
            }

            classificarIdade();
        }
    });
}

// Inicia o loop de perguntas
classificarIdade();
