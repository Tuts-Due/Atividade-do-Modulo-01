/*Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let soma = 0;
let contador = 0;

function solicitarNumero() {
    rl.question("Digite um número decimal (ou 0 para finalizar): ", function(input) {
        const numero = parseFloat(input);

        if (numero === 0) {
            if (contador === 0) {
                console.log("Nenhum número foi inserido.");
            } else {
                const media = soma / contador;
                console.log(`A média aritmética dos números inseridos é: ${media}`);
            }
            rl.close();
        } else {
            if (!isNaN(numero)) {
                soma += numero;
                contador++;
            } else {
                console.log("Entrada inválida. Por favor, insira um número decimal.");
            }
            solicitarNumero(); // Solicita o próximo número
        }
    });
}

// Inicia o programa solicitando o primeiro número
solicitarNumero();
