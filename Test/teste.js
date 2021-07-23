const { getMaxListeners } = require('process')
const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
}) //como se conectar ao banco de dados utilizando node (sequelize)
//os parametros são: nome do banco, usuario e senha

/* sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Erro ao se conectar: " + erro)
}) */

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
}) //criando model (tabela)

//Postagem.sync({force: true}) //gerando esse model diretamente no banco

Postagem.create({
    titulo: "Teste",
    conteudo: "hfhegjoewjof"
}) //criando uma postagem

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})

Usuario.create({
    nome: "Kathleen",
    sobrenome: "Fidelis",
    idade: 19,
    email: "teste@gmail.com"
}) //criando um usuario