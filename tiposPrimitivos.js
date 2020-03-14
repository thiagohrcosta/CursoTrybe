/*

    O Javascript classifica os dados por tipo de forma a permitir sua 
    representação conforme o mundo real.

    String = sequência de um ou mais caracteres;
    Number = números inteiros ou com casas decimais, positivos ou negativos;
    Boolean = tipos lógicos representados por verdadeiro ou falso.

*/

var nomeEstudante = "Ana";
console.log(nomeEstudante);

nomeEstudante = 'Ana';
console.log(nomeEstudante);

// ==========================

var aprovada = false;

aprovada = true;

// ==========================

var hub = "Belo Horizonte";

var turma = 1;
var turmaHub = "Turma 1 - Belo Horizonte";

var salario = 3500.70;

// qual é o tipo de dado 
console.log(typeof(turmaHub));
console.log(typeof(turma));

// Pequena adição próprio

console.log(" =========================== ")
if (aprovada == true){
    console.log(`A aluna ${nomeEstudante} foi aprovada para a ${turmaHub} e já recebe o salário de ${salario}..`)
}
else{
    console.log(`A aluna ${nomeEstudante} foi reprovada.`)
}
