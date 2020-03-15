
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

let readLine = () => inputString[currentLine++];



function buscaNumeroPrimos(n) {
//não altere a linha acima

/*
 * Nas linhas a seguir, escreva um código que encontre todos
 * os números primos entre 0 e n e coloque-os num array chamado
 * `numerosPrimos`(você deve criar esse array)
 */
    
var numerosPrimos = [2, 3];

for (var numeroAtual = 4; numeroAtual < n; numeroAtual++) {
    var quantidadeDeDivisores = 0;

    for (var numeroMenor = 2; numeroMenor < numeroAtual; numeroMenor++) {
        if (numeroAtual % numeroMenor == 0) {
            quantidadeDeDivisores++;
        }
    }

    if (quantidadeDeDivisores == 0) {
        numerosPrimos.push(numeroAtual);
    }
}

return numerosPrimos;
    
    

//não altere as linhas abaixo
  return numerosPrimos;
}

// fim do seu código