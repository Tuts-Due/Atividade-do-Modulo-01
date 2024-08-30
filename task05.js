/*Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else. */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Baixo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidade";
    }
}

async function obterEntrada() {
    return new Promise((resolve) => {
        rl.question("Digite seu peso (em kg) ou 'x' para encerrar: ", function(pesoInput) {
            if (pesoInput.toLowerCase() === 'x') {
                rl.close();
                resolve(null);
            } else {
                rl.question("Digite sua altura (em metros): ", function(alturaInput) {
                    resolve({
                        peso: parseFloat(pesoInput),
                        altura: parseFloat(alturaInput)
                    });
                });
            }
        });
    });
}

async function iniciarPrograma() {
    let entrada;
    do {
        entrada = await obterEntrada();

        if (entrada) {
            const { peso, altura } = entrada;

            if (isNaN(peso) || isNaN(altura) || altura <= 0) {
                console.log("Entrada inválida. Certifique-se de fornecer números válidos para peso e altura.");
            } else {
                const imc = calcularIMC(peso, altura);
                console.log(`Seu IMC é ${imc.toFixed(2)}.`);
                console.log(`Categoria: ${classificarIMC(imc)}`);
            }
        }
    } while (entrada !== null);
}

iniciarPrograma();