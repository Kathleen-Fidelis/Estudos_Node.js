var http = require('http');

http.createServer(function(req, res){
    res.end("Hello World, welcome to my website")
}).listen(8081); //criando um servidor na porta 8081

console.log("Servidor rodadndo!")