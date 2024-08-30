/*Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/ 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function classificarNota() {
    rl.question("Digite a nota (0 a 10) ou 'x' para encerrar: ", function(input) {
        if (input.toLowerCase() === 'x') {
            console.log("Programa encerrado.");
            rl.close();
            return;
        }

        const nota = parseFloat(input);

        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log("Nota inválida. Por favor, insira um valor entre 0 e 10.");
        } else {
            if (nota >= 6) {
                console.log("Aprovado");
            } else if (nota >= 4) {
                console.log("Recuperação");
            } else {
                console.log("Reprovado");
            }
        }

        classificarNota();
    });
}

classificarNota();
