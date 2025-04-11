const mongoose=require('mongoose')

const itemSchema=new mongoose.Schema({
    item_id:Number,
    item_name:String,
    quantity:Number,
    price:Number,
    company_id:Number,
    purchase_id:Number,
    description:String
})

module.exports=mongoose.model('item',itemSchema)