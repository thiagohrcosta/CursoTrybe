/* 

    É o meio pelo qual conseguimos expressar nosso raciocínio 
    lógico de maneira estruturada em linguagem humana para
    programação.

    IF / ELSE

*/

var notaAluno = 130;
var notaAluno2 = 97;
var aprovado = 100;

if (notaAluno >= aprovado){
    console.log("Aprovado");
}
else{
    console.log("Reprovado");
}

if (notaAluno2 >= aprovado){
    console.log("Aprovado");
}
else{
    console.log("Reprovado");
}

// Estruturas encadeadas

if (notaAluno2 >= aprovado){
    console.log("Aprovado.");
}
else if(notaAluno2 >= 90){
    console.log("Recuperação.");
}
else{
    console.log("Reprovado.");
}

// Semáforo

var luzSemafaro = "Verde";

if (luzSemafaro === "Verde"){
    console.log("Siga em frente");
}
else if(luzSemafaro === "Amarelo"){
    console.log("Atenção! Sinal ficará vermelho!")
}
else{
    console.log("Sinal vermelho. Pare!")
}
