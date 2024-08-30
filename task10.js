/*Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterNumeroInteiro() {
    return new Promise((resolve) => {
        rl.question("Digite um número inteiro: ", function(input) {
            const numero = parseInt(input);
            resolve(numero);
        });
    });
}

async function iniciarPrograma() {
    const numero = await obterNumeroInteiro();

    if (isNaN(numero)) {
        console.log("Entrada inválida. Por favor, insira um número inteiro.");
    } else {
        for (let i = 0; i < 10; i++) {
            console.log(numero);
        }
    }

    rl.close();
}


iniciarPrograma();
