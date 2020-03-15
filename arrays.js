/*

    Um array é uma estrutura capaz de armazenar um conjunto
    de valores.

*/

var aprovados = ["Joana", "Maria", "Lucas", "Mateus", "Paula"];

console.log(aprovados[0], aprovados[4]);

aprovados.push("Pedro");

console.log(aprovados);

var tamanhoDaListaAprovados = aprovados.length;

console.log(tamanhoDaListaAprovados);

// Acrescentando aluno caso sua nota seja superior a 100;

var aluno1 = {
    nome: "João",
    nota: 102
}

if (aluno1.nota >= 100){
    aprovados.push(aluno1.nome);
    console.log(aprovados);
}
else{
    console.log("Não há mais alunos aprovados");
}

// Exercício ==============================================
/*
    Criar um array com as cores da bandeira do seu Estado;
    Acessar o tamanho do array criado;
    Acessar cada uma das posições e visualizar o seu valor.

========================================================= */ 

console.log(" ================================ ")
var coresBandeiraMg = ["Branco", "Vermelho"];
coresBandeiraMg.push("Preto");
var tamanhoArray = coresBandeiraMg.length;
console.log(coresBandeiraMg[0], coresBandeiraMg[1]);
console.log(" ================================ ")

// Adicionando uma repetição para automatizar o processo.

for (i = 0; i < tamanhoArray; i++){
    console.log(coresBandeiraMg[i]);
}

console.log(" ===================================== ")

var lista = ["Atlético", "América", "Cruzeiro"];
if (lista.length > 0){
    console.log(lista[0]);
}
else{
    console.log("Array vazio")
}

// Exercício 2 =========================================
var primeiraString = "abacaxi";
var segundaString = "uva";

var resultado;

if (primeiraString.length < segundaString.length){
    resultado = primeiraString + segundaString;
    console.log(resultado);
}
else if (primeiraString.length === segundaString.length){
    resultado = segundaString + primeiraString;
    console.log(resultado);
}
else{
    resultado = segundaString + primeiraString
    console.log(resultado);
}
