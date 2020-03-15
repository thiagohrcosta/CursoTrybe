/*
    >
    >=
    <
    <=
    ===  = igualdade
    !==  = desigualdade

    Comparam um valor e retornam um booleano

*/

console.log(2 > 1);

var a = 2;
var b = 10;

console.log(a > b);
console.log(a === b);
console.log(a === (b / 5));

var notaDoAluno = 125;
var aprovado = notaDoAluno >= 100;

console.log(notaDoAluno > 100);
if (notaDoAluno > 100){
    console.log("Aluno aprovado.")
}
else{
    console.log("Reprovado.")
}

var notaDoAluno2 = 94;
if (notaDoAluno2 > 100){
    console.log("Aluno aprovado.")
}
else{
    console.log("Reprovado.")
}
