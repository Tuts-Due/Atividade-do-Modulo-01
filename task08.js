/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerValores() {
    return new Promise((resolve) => {
        rl.question("Digite o primeiro valor: ", function(valor1) {
            rl.question("Digite o segundo valor: ", function(valor2) {
                resolve({
                    valor1: parseFloat(valor1),
                    valor2: parseFloat(valor2)
                });
            });
        });
    });
}

async function iniciarPrograma() {
    const { valor1, valor2 } = await lerValores();

    if (isNaN(valor1) || isNaN(valor2) || valor1 === valor2) {
        console.log("Entrada inválida. Certifique-se de fornecer dois valores diferentes e numéricos.");
    } else {
        if (valor1 < valor2) {
            console.log(`Valores em ordem crescente: ${valor1} e ${valor2}`);
        } else {
            console.log(`Valores em ordem crescente: ${valor2} e ${valor1}`);
        }
    }

    rl.close();
}

iniciarPrograma();
