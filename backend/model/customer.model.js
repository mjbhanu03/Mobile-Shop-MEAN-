const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
  number: Number,
  email: String
})

module.exports = mongoose.model('customer', customerSchema)