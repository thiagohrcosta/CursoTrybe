/*

    O Javascript oferece ferramentes para expressões matemátiacas básicas
    sem grandes esforços. As operações são declaradas de forma parecida com a 
    linguagem natural

    Ex: 10 + 5;  8*2 ; 4/2.

    Adição
    Subtração
    Multiplicação
    Divisão
    Exponenciação
    Modulo (resto)

*/

var a = 2;
var b = 3;

console.log( a + b);
console.log( a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

var salario = 3500;
var aumento = 1000.50;

console.log(salario + aumento);

salario = salario + aumento;

console.log(salario);

// 10 é par? ====================

var c = 10;
if ((c % 2) == 0){
    console.log(`O número ${c} é par.`)
}
else{
    console.log(`O número ${c} é impar.`)
}