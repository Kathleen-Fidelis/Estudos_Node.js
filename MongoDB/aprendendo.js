const mongoose = require("mongoose")

//Configurando o mongoose
mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/aprendendo", { //se conectando a um banco no Mongo
    useMongoClient: true
}).then(() => {
    console.log("MongoDB conectado")
}).catch((erro) => {
    console.log("Houve um erro ao se conectar ao MongoDB" + erro)
}) 

//Model - Usuários
    //Definindo a model
        const UsuarioSchema = mongoose.Schema({ //é uma boa prática colocar Schema na frente do nome da model.
            nome: {
                type: String,
                require: true //indica se é obrigatório ou não, se não for é só nao escrever essa linha, ou colocar false.
            },
            sobrenome: {
                type: String,
                require: true
            },
            email: {
                type: String,
                require: true
            },
            idade: {
                type: Number, //qualquer tipo de número é do tipo Number.
                require: true
            },
            pais: {
                type: String
            }
        })

//Definindo a collection
    mongoose.model('usuarios', UsuarioSchema) //como parâmetro temos o nome da collection (como se fosse o nome da tabela do MySQL) dessa model, e o nome da model.

//Criando um novo usuário
    const Kathleen = mongoose.model('usuarios')        

    new Kathleen({
        nome: "Kathleen",
        sobrenome: "Fidelis",
        email: "teste@teste.com",
        idade: 19,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário criado com sucesso")
    }).catch((err) => {
        console.log("Houve um erro ao registrar o usuário: " + err)
    })