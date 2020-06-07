
'use strict';
//const http = require('http')
const HTTP = require('./config/server')
const PORT = parseInt(8080)

HTTP.app.listen(PORT, () => {
    console.log(`\n Backend Executando na porta ${PORT} ... \n` )
})