/*Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterNumero() {
    return new Promise((resolve) => {
        rl.question("Digite um número para ver a tabuada: ", function(input) {
            const numero = parseInt(input);
            if (isNaN(numero)) {
                console.log("Entrada inválida. Por favor, insira um número inteiro.");
                rl.close();
            } else {
                resolve(numero);
            }
        });
    });
}

async function iniciarPrograma() {
    const numero = await obterNumero();

    if (!isNaN(numero)) {
        console.log(`Tabuada do ${numero}:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }

    rl.close();
}

iniciarPrograma();
