const BodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(BodyParser.text())
    app.use(BodyParser.json())
    app.use(BodyParser.urlencoded({ extended: true }))

    app.use(cors())
}