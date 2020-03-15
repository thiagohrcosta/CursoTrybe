/*
    Operadores lógicos aqui abordados são E e OU
    &   
    ||

*/

var sol = true;
var fimDeSemana = false;

var irParaPraia = (sol === true && fimDeSemana === true);

console.log(irParaPraia);

var ensolaradoEFimDeSemana = (sol == true && !fimDeSemana === true);

console.log(ensolaradoEFimDeSemana);

var diaEnsolarado = false;
var beberAgua = true;

var diaComum = (diaEnsolarado === true || beberAgua === true);

console.log(diaComum);

var tudoFalso = (diaEnsolarado === true || !beberAgua === true);
console.log(tudoFalso);
