/*Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obterNumeros(count) {
    return new Promise((resolve) => {
        let numeros = [];
        let i = 0;

        function solicitarNumero() {
            if (i < count) {
                rl.question(`Digite o número ${i + 1}: `, function(input) {
                    const numero = parseFloat(input);
                    if (isNaN(numero)) {
                        console.log("Entrada inválida. Por favor, insira um número.");
                        solicitarNumero();
                    } else {
                        numeros.push(numero);
                        i++;
                        solicitarNumero();
                    }
                });
            } else {
                resolve(numeros);
            }
        }

        solicitarNumero();
    });
}

async function iniciarPrograma() {
    const quantidade = 5;
    const numeros = await obterNumeros(quantidade);
    const somaTotal = numeros.reduce((acc, num) => acc + num, 0);

    console.log(`A soma total dos números é: ${somaTotal.toFixed(2)}`);
    rl.close();
}


iniciarPrograma();
