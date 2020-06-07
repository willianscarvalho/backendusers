const Users = require('./../models/users')



    /*
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation
     */

const homeUser = (req, res, next) => {

    (err) => {if (err) return res.status(404).send({ error: 'ERRO na pagina inicial!' })}

    return res.status(202).send({
            Title: 'Node API',
            Version : '0.0.1',
            Message: 'Pagina Inicial área de Usuarios'
    })
    
}

const usersFind = async (req, res, next) => {    
    
   await Users.find({}) 
        .then(data => {
            if(data == false) return res.status(200).send({Message: 'Não há Registro'})
            return res.status(200).send(data)
        })
        .catch(err => {
            if (err) return res.status(401).send({ error: 'ERRO na consulta de usuarios!' })
        })
}

const usersFindOne = async (req, res, next) => {    

    const { registration } = req.body

    if (!registration) return res.status(200).send({error: ' Dados insuficiente! '})
    
    await Users.findOne({registration}, (err, data) => {
        if(!data) return res.status(200).send({Message: 'Usuario não existe!'})  
        if (err) return res.status(401).send({error: ' Erro ao buscar usuario! '})

        return res.status(200).send(data)
    })
        
}

const created = async (req, res, next) => {

    const { name, email, registration, password } = req.body

    if (!name || !email || !registration || !password) return res.status(200).send({error: ' Dados insuficiente! '})
    
       Users.findOne({registration}, async (err, data) => {
            if (err) return res.status(401).send({error: ' Erro ao buscar usuario! '})
            if (data) return res.status(200).send({Message: ' Usuario já Cadastrado! '})

       await Users.create(req.body, (err, data) => {        
            if (err) return res.status(401).send({error: ' Erro durante o cadastro do usuário! '})

            data.password = undefined
            return res.status(201).send(data)
        })
    })
    
}

const updated = async (req, res, next) => {

    const { name, email, registration, password } = req.body
    
       Users.findOne({registration}, async (err, data) => {
            if (err) return res.status(401).send({error: ' Erro ao buscar usuario! '})
            if (!data) return res.status(200).send({Message: ' Usuario não existe! '})

            await Users.updateOne(req.body, (err, data) => {
                
                if (err) return res.status(401).send({error: ' Erro durante o cadastro do usuário! '})
                
                return Users.findOne({registration}, async (err, data) => {
                    if (err) return res.status(401).send({error: ' Erro ao buscar usuario! '})
                    res.status(200).send({Message: 'Usuario Atualizado', data})
                })

            })
            
        })
    
}

const deleted = async (req, res, next) => {

    const { registration } = req.body

    if (!registration) return res.status(200).send({error: ' Dados insuficiente! '})
    
       Users.findOne({registration}, async (err, data) => {
            if (err) return res.status(401).send({error: ' Erro ao buscar usuario! '})
            if(!data) return res.status(200).send({Message: 'Usuario não existe!'}) 

       await Users.deleteOne(req.body, (err, data) => {
            if (err) return res.status(401).send({error: ' Erro durante o cadastro do usuário! '})
            
            return res.status(201).send({Message: `Usuario ${registration} foi deletado!`})
        })
    })
    
}

module.exports = { homeUser, usersFind, usersFindOne, created, updated, deleted }
