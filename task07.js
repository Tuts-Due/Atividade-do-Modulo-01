/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPrecoMaças(numeroMaças) {
    const precoPorMaçaMenosDe12 = 0.30;
    const precoPorMaçaPeloMenos12 = 0.25;

    if (numeroMaças < 12) {
        return numeroMaças * precoPorMaçaMenosDe12;
    } else {
        return numeroMaças * precoPorMaçaPeloMenos12;
    }
}

async function obterNumeroMacas() {
    return new Promise((resolve) => {
        rl.question("Digite o número de maçãs compradas: ", function(input) {
            const numeroMacas = parseInt(input);
            resolve(numeroMacas);
        });
    });
}

async function iniciarPrograma() {
    const numeroMacas = await obterNumeroMacas();

    if (isNaN(numeroMacas) || numeroMacas < 0) {
        console.log("Entrada inválida. O número de maçãs deve ser um número positivo.");
    } else {
        const valorTotal = calcularPrecoMacas(numeroMacas);
        console.log(`O valor total da compra é R$ ${valorTotal.toFixed(2)}.`);
    }

    rl.close();
}

iniciarPrograma();
