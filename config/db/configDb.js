const {dbInfo} = require('./../../.env')
const configDb = {
    db: {
        host: dbInfo.DB_HOST,
        port: dbInfo.DB_PORT,
        dbName: dbInfo.DB_DATABASE 
    }
    
}

module.exports = configDb