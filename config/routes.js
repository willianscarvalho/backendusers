const app = require('express').Router()

const index = require('./../api/routes/index')
const user = require('./../api/routes/user')

app.use(index)
app.use(user)

module.exports = app