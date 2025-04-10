const mongoose = require('mongoose')

const sellOrderSchema = new mongoose.Schema({
  orderDate: String,
  itemId: String,
  customerId: Number,
  shippingAddress: String,
  quantity: Number,
  totalAmount: String
})

module.exports = mongoose.model('sellOrder', sellOrderSchema)