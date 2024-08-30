/*Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/
const readline = require('readline');

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarNumero() {
    rl.question("Digite um número inteiro (ou 'x' para encerrar): ", function(input) {
        if (input.toLowerCase() === 'x') {
            
            console.log("Programa encerrado.");
            rl.close();
        } else {
            
            const numero = parseInt(input);

            if (!isNaN(numero)) {
                if (numero % 2 === 0) {
                    console.log(numero + " é par.");
                } else {
                    console.log(numero + " é ímpar.");
                }
            } else {
                console.log("Por favor, insira um número válido.");
            }

            
            perguntarNumero();
        }
    });
}


perguntarNumero();
