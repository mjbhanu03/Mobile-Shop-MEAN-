const mongoose=require('mongoose');

const purchaseSchema=new mongoose.Schema({
    purchase_id:Number,
    supplier_id:Number,
    order_date:Number,
    quantity:Number,
    total_amt:Number,
})

module.exports=mongoose.model('purchase',purchaseSchema)
