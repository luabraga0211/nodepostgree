require("dotenv").config();// gerencia variaveis de ambiente em um projeto 

//Define a porta do servidor
const port = process.env.PORT;

//Importar o arquivo do Express
const express = require("express");

//Renomear a variavel app para express
const app = express();

//Importar o arquivo db.js
const db = require("./db");


//Define a rota raiz
app.get("/", (req, res) =>{
    res.json({message: "Funcionando"});
})

//Define a rota Clientes
app.get("/clientes", async (req, res) => {
    const clientes = await db.selectCustomers();
    res.json(clientes);
})

//Ouve as conexoes na porta que foi definida anteriormente
app.listen(port);

//Exibe a mensagem em parenteses no console
console.log("Backend rodando perfeitamente");