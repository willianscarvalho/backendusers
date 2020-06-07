const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const Schema = mongoose.Schema
const {secretHash} = require('./../../.env')
const connectDb = require('./../../config/db/mongodb')

const salt = bcryptjs.genSaltSync(10)
const hashEncripted = bcryptjs.hashSync(secretHash, salt)

//connectDb(db)


const UserSchema = new Schema({

  name: {
    firstname: { type: String, trim: true },
    lastname: { type: String, trim: true }
  },

  registration: { type: Number, required: true, unique: true, trim: true},

  email: {
    type: String, 
    required: true,
    unique: true, 
    lowercase: true, 
    trim: true
  },

  password: {
    type: String,
    required:true,
    trim: true,
    select: false
  },

  levelAcess: {
    type: String,
    enum: ['ADMIN', 'ADVANCED','OPERATIONAL', 'COMMON'],
    required: true,
    default: 'COMMON'
  },

  state: {
      type: String,
      enum: ['ACTIVATED', 'DISABLED'],
      required: true,
      default: 'DISABLED'
  },

  createdAt: {type: String},
  updatedAt: {type: String}
  
})

UserSchema.pre('updateOne', function (next) {  

  const user = this._update
  
  user.updatedAt = new Date().toLocaleString()

  if (!user.password) return next()

  bcryptjs.genSalt(10, function(err, salt) {
    if (err) return next(err)
    bcryptjs.hash(user.password, (hashEncripted, salt), (err, encripted) => {
      if (err) return next(err)
      user.password = encripted
      next()
    })
  })

})

UserSchema.pre('save', function (next) {

  const user = this

  user.updatedAt = new Date().toLocaleString()
  user.createdAt = new Date().toLocaleString()

  bcryptjs.genSalt(10, function(err, salt) {
    if (err) return next(err)
    bcryptjs.hash(user.password, (hashEncripted, salt), (err, encripted) => {
      if (err) return next(err)
      user.password = encripted

      next()
    })
  })

})

connectDb()

module.exports = mongoose.model('Users', UserSchema)