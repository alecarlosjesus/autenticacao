//Importando o Express
const express = require('express')

//Importando a classe de controle de rotas
const RotasController = require('./RotasController')

//Importando o Router objeto do express para rotas
const router = express.Router()

//Criando as rotas de maneira organizada
router.get('/', RotasController.home)
router.get('/login', RotasController.login)
router.get('/logout', RotasController.logout)
router.post('/validacao', RotasController.validacao)

//Exportando o objeto da rota
module.exports = router
