const express = require("express");
const app = express(); //cria uma instância, uma cópia inteira do framework express pra dentro da variável app. Agora tudo que for usar referente ao express usamos a variável app, transformamos em uma constante para não ser sobrescrita.

/*app.get("/", function(req, res){
    res.send("Seja bem-vindo ao meu app!");
});

app.get("/sobre", function(req, res){
    res.send("Minha pagina sobre");
}); //criação de rotas

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao meu blog!");
});*/


app.get("/ola/:cargo/:nome", function(req, res){
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2> Seu cargo e: " + req.params.cargo + "</h2>"); //rotas dinâmicas utilizando parâmetros(passados na url) 
    //o send só pode ser enviado uma vez, por isso está td junto
});




app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html"); //exibindo html
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
}); 

app.get("/blog", function(req, res){
    res.sendFile(__dirname + "/html/blog.html");
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://locahost:8081");
}); //função de callback
    //app.listen(8081) precisa ser a última linha do meu código 