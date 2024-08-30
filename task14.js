/*Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.*/
const readline = require('readline');

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

rl.question("Digite um número inteiro para calcular o fatorial: ", function(input) {
    const numero = parseInt(input);

    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, insira um número inteiro não negativo.");
    } else {
        const resultado = calcularFatorial(numero);
        console.log(`O fatorial de ${numero} é: ${resultado}`);
    }

    rl.close();
});
