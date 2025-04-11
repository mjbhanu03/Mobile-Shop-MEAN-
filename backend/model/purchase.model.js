const mongoose = require('mongoose')

const purchaseOrderSchema = new mongoose.Schema({
  purchaseOrder: Number,
  orderDate: String,
  supplierId: Number,
  totalAmount: Number
})

module.exports = mongoose.model('purchaseOrder', purchaseOrderSchema)