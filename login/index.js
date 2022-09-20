//Importando o express
const express = require('express')
//Criando a variável app a partir do import do express
const app = express()
//Parser dos dados vindos das páginas
app.use(express.json())
app.use(express.urlencoded({
  extended:true
}))

//IMPORTANDO A SESSÃO
const session = require('express-session')
//CONFIGURANDO  A SESSÃO
// criando um dia de 24 horas de millisegundos
const umDia = 100 * 60 * 60 * 24;
//middleware da sessão
  app.use(session({
  secret: "minhachavesecretakrqsxsvcsfgeop7634",
  saveUninitialized:true,
  cookie: { maxAge: umDia },
  resave: false,
  name:"unplugged"
}))

//Importando a View Engine
const exphbs = require("express-handlebars")
//Deixando a extensão handlebars como .hbs para facilitar a leitura
app.engine('hbs', exphbs.engine({ extname: '.hbs' }))
//Setando o motor de views
app.set('view engine', 'hbs')

//Utilizando static para gerar uma variável para a pasta public de conteúdo estático.
app.use('/publico',express.static('public'))
//Rota criada a partir da variável estatica para a pasta pública.(/publico)
app.get("/publico", (req,res) => {
  res.send('<p>Conteúdo estático</p>')
})

//Criando o importa do arquivo de rotas
const rotas = require("./routers/Rotas")
//Criando uma rota padrão no sistema
app.use("/", rotas)

//Importando a pasta do banco
const conn = require('./db/conn')

//Servidor escutando na porta 3000
app.listen(3000,() => {
    console.log("Servidor Iniciando na porta 3000")
})

