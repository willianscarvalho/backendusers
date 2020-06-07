const mongoose = require('mongoose')
const {db} = require('./configDb')

const host = db.host
const port = db.port
const dbName = db.dbName

const uri = `mongodb://${host}:${port}/${dbName}`
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true}


const connectDb = () => {
    mongoose.connect(uri, options)

    try{
        mongoose.set('useCreateIndex', true)
        mongoose.set('autoIndex', true)
        mongoose.connection.on('connected', () => console.log('Aplicação CONECTADA ao banco de dados'))
        mongoose.connection.on('disconnected', () => console.log('Aplicação DESCONECTADA do banco de dados'))
    } catch (err) {
        mongoose.connection.on('error', (err) => console.log('ERRO ao CONECTAR com o banco de dados:' + err))
    }

    /*
    .then(
        () => {
            mongoose.set('useCreateIndex', true)
            mongoose.set('autoIndex', true)
            mongoose.connection.on('connected', () => console.log('Aplicação CONECTADA ao banco de dados'))
        }
    ).catch( 
        (err) => {
            mongoose.connection.on('error', (err) => console.log('ERRO ao CONECTAR com o banco de dados:' + err))
        }
    )
    */
} 

module.exports = connectDb