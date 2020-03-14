/*

    A variável é praticamente uma estrutura capaz de armazenar um valor
    determinado. 
    
    Caixa - Etiqueta (NOME)
    Algo armazenado - Valor

*/

var tituloDoConteudo = "Variáveis e Constantes"; // Valor entre aspas por ser uma String

console.log(tituloDoConteudo);

// var e let permitem a alteração do valor da variável

tituloDoConteudo = "Tipos Primitivos"

console.log(tituloDoConteudo);

// ====================================================

/*
    Por convenção não se pode começar o nome da variável com número,
    devendo sempre utilizar cammelcase

*/

var hubDaTrybe = "Sem Hub";
console.log(hubDaTrybe);

// Usando CONST - valor não poderá ser alterado após sua criação 
const duracaoMaximaDoCurso = "12 meses";
console.log(duracaoMaximaDoCurso);
// => acarretará erro = > duracaoMaximaDoCurso = "18 meses";