/*

    Funções são a forma mais essencial de organização de código 
    e de lógica na programação. Através de funções você consegue
     empacotar partes do seu código e separá-las em blocos 
     lógicos auto-contidos. Assim, ao invés de ter um programa 
     de cem linhas com uma lógica linear que segue do começo ao 
     fim e bem mais difícil de identificar o que cada parte desse
     código faz, você tem menos repetição e um programa onde a 
     lógica está muito bem dividida - e, portanto, muito mais 
     fácil de ser entendida.

     function nomeDaFuncao(param1, param2){
         var resultado = param1 + param2;

         return resultado
     }

     nomeDaFuncao(10, 20);
*/


var statusCarro = "desligado";
var aceleracao = 0;
var rotacaoVolante = 0;

function ligarDesligar(){
    if (statusCarro === "desligado"){
        statusCarro = "ligado";
    }    
    else {
        statusCarro = "desligado";
    }
    return statusCarro;
}

function acelearar(incremento){
    aceleracao = aceleracao + incremento;
    return "Acelerando a " + aceleracao + " m/s²";
}

function frear(decremento){
    aceleracao = aceleracao - decremento;
    return "Desacelerando para " - aceleracao + " m/s²"
}

function girarVolante(anguloRotacao){
    rotacaoVolante = anguloRotacao;
    return rotacaoVolante + " graus."
}

function velocidadeAtual(){
    var kmPorHora = aceleracao * 3.6;
    return "Velocidade atual: " + kmPorHora + " km/h"
}

console.log(ligarDesligar());
console.log(acelearar(20));
console.log(girarVolante(-45));
console.log(velocidadeAtual());
frear(5);
console.log(velocidadeAtual());
frear(15);
console.log(velocidadeAtual());

