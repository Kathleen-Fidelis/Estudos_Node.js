var SomaFunc = require("./soma"); //carregamento de módulo, o require() retorna o módulo, pra uma variável, nesse caso.
var SubFunc = require("./sub");
var MultiFunc = require("./multi");
var DivFunc = require("./div");

console.log(SomaFunc(1, 2));
console.log(SubFunc(1, 2));
console.log(MultiFunc(1, 2));
console.log(DivFunc(1, 2));