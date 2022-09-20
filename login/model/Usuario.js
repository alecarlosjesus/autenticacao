const conn = require("../db/conn")

class Usuario{ 

    constructor(email, senha){
        this.email = email
        this.senha = senha
    }

    static async validar(emailF, senhaF){
     
        let dados = await conn.db().collection('usuarios').findOne({email : emailF, senha : senhaF})
        
        if(dados){
            return true                    
        }else{
            return false
        }
    }
}

module.exports = Usuario
