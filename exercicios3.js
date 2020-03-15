'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function ehPalindromo(palavra) {
    // não altere a linha acima

    /*
     * Complete o código abaixo para verificar se 
     * varíavel `palavra` é um palíndromo ou não.
     * Caso seja um palíndromo, a função deve retornar
     * `SIM, SOU UM PALÍNDROMO`, se não é um palídromo
     * a função deve retornar 
     * `INFELIZMENTE, NÃO SOU UM PALÍNDROMO`
     */
    // escreva aqui seu código:

    var palindromo = "";

    for (var index = palavra.length - 1; index >= 0; index--) {
        palindromo += palavra[index]
    }

    if (palavra == palindromo) {
        return "SIM, SOU UM PALÍNDROMO"
    } else {
        return "INFELIZMENTE, NÃO SOU UM PALÍNDROMO"
    }





    // não altere as linhas abaixo
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const palavra = readLine();

    const result = ehPalindromo(palavra);

    ws.write(result + '\n');

    ws.end();
}
