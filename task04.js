/*Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\nEscolha uma raça de cachorro:");
    console.log("1. Labrador");
    console.log("2. Poodle");
    console.log("3. Bulldog");
    console.log("x. Sair");

    rl.question("Digite sua escolha: ", function(input) {
        switch (input.toLowerCase()) {
            case '1':
                console.log("Você escolheu a raça Labrador.");
                break;
            case '2':
                console.log("Você escolheu a raça Poodle.");
                break;
            case '3':
                console.log("Você escolheu a raça Bulldog.");
                break;
            case 'x':
                console.log("Saindo...");
                rl.close();
                return;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção entre 1 e 3 ou 'x' para sair.");
                break;
        }

        mostrarMenu();
    });
}

mostrarMenu();
