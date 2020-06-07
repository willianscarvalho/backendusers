//const Users = require('./../models/users')


    /*
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }
     */
const index = (req, res, next) => {

    (err) => {if (err) return res.status(404).send({ error: 'ERRO na pagina inicial!' })}

    return res.status(202).send({
            Title: 'Node API',
            Version : '0.0.1',
            Message: 'Pagina Inicial'
    })
    
}

const api = (req, res, next) => {

    (err) => {if (err) return res.status(404).send({ error: 'ERRO na pagina inicial!' })}

    return res.status(202).send({
            Title: 'Node API',
            Version : '0.0.1',
            Message: 'Pagina Inicial API'
    })
    
}

module.exports = {index, api}