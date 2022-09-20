const Usuario = require('../model/Usuario')

module.exports = class RotasController { 

    //Rota padrão do sistema
    static home(req, res) {

        if(req.session.name === "logado"){
            res.render('home',{ msg :  'logado'})
        }else{
            res.render('login',{ msg :  ''})        
        }
    }

    //Rota padrão do sistema
    static logout(req, res) {

        if(req.session.name === "logado"){
            req.session.name = "unplugged"
            res.render('login',{msg :  ''})
        }
    }

    //Rota para o carregamento do form de login
    static login(req,res){
        res.render('login',{msg :  ''})
    }

    //Rota para realizar a validação do usuário
    static async validacao(req,res){
        
        const email  = req.body["txtEmail"]
        const senha = req.body["psw"] 

        let mark = await Usuario.validar(email, senha)
        
        if(mark === true){
            req.session.name = "logado"
            res.redirect('/')
        }else{
            res.redirect('/login')
        }
    }
    
}


