const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    companyId: String,
    companyName: String,
    address: String,
    contactno: String,
})

module.exports = mongoose.model('company', companySchema)