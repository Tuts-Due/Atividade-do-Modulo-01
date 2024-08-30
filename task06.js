/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarTriangulo(a, b, c) {

    return (a + b > c) && (a + c > b) && (b + c > a);
}

function identificarTipoTriangulo(a, b, c) {
    if (a === b && b === c) {
        return "Triângulo equilátero";
    } else if (a === b || b === c || a === c) {
        return "Triângulo isósceles";
    } else {
        return "Triângulo escaleno";
    }
}

async function obterEntrada() {
    return new Promise((resolve) => {
        rl.question("Digite o valor do lado A: ", function(aInput) {
            rl.question("Digite o valor do lado B: ", function(bInput) {
                rl.question("Digite o valor do lado C: ", function(cInput) {
                    resolve({
                        a: parseFloat(aInput),
                        b: parseFloat(bInput),
                        c: parseFloat(cInput)
                    });
                });
            });
        });
    });
}

async function iniciarPrograma() {
    let entrada;
    do {
        entrada = await obterEntrada();

        const { a, b, c } = entrada;

        if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
            console.log("Entrada inválida. Certifique-se de fornecer números válidos e positivos para os lados.");
        } else if (verificarTriangulo(a, b, c)) {
            console.log("Os valores fornecidos formam um triângulo.");
            console.log(`Tipo de triângulo: ${identificarTipoTriangulo(a, b, c)}`);
        } else {
            console.log("Os valores fornecidos não formam um triângulo.");
        }
        
        rl.question("\nDeseja verificar outro triângulo? (Digite 'x' para encerrar): ", function(resposta) {
            if (resposta.toLowerCase() === 'x') {
                rl.close();
            } else {
                iniciarPrograma(); 
            }
        });
    } while (entrada !== null);
}

iniciarPrograma();