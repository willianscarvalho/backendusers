'use strict'
const app = require('express').Router()
const users = require('../controllers/users')

app.all('/api/users', users.homeUser)
app.get('/api/users/find', users.usersFind)
app.put('/api/users/findone', users.usersFindOne)
app.put('/api/users/update', users.updated)
app.post('/api/users/create', users.created)
app.delete('/api/users/delete', users.deleted)

module.exports = app