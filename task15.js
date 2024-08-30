/*Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

function gerarFibonacci(n) {
    let a = 0, b = 1, proximo;

    console.log("Os primeiros " + n + " números da sequência de Fibonacci são:");

    for (let i = 1; i <= n; i++) {
        console.log(a);
        proximo = a + b;
        a = b;
        b = proximo;
    }
}


gerarFibonacci(10);
