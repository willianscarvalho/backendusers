'use strict';
const app = require('express').Router()
const home = require('./../controllers/index')

app.all('/', home.index)
app.all('/api', home.api)

module.exports = app