'use strict';
const express = require('express')
const consign = require('consign')
const BodyParser = require('body-parser')


//const configDb = require('./db/mongodb')

//const connDB = configDb
//const {db} = require('./db/configDb')
//const cors = require('cors')
const app = express()

//app.connDB.find()

app.use(BodyParser.text())
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: true }))

//app.use(cors())

/*///  Minhas Rotas ///*/

const routes = require('./routes')
app.use(routes)
/*
consign()
    //.include('./config/passport.js')    
    //.include('./config/middlewares.js')
    //.then('./api/models')
    //.then('./api/controllers')
    .then('./config/routes.js')
    //.then('./config/routes.js')
    //.then('./config/routes.js')
     
    //.then('./config/routes.js')
    
    
    
    //.then('./api/models')
    
    //.then('./api/validation.js')
    //.then('./api')
    //.then('./schedule')
    //.then('./config/routes.js')
    
    .into(app)
*/

module.exports = {app}