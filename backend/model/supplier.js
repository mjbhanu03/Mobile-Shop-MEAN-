const mongoose=require('mongoose');


const supplierSchema=new mongoose.Schema({
    supplier_id:Number,
    supplier_name:String,
    contact_info:Number,
    address:String,
    company_id:Number,
})

module.exports=mongoose.model('supplier',supplierSchema)