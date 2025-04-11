const express=require('express');
const router=express.Router();
const Item=require('../model/item');
const { route } = require('./customer.routes');

router.post('/add',async(req,res)=>{
    const item=new Item(req.body);
    await item.save();
    res.json(item);
});

router.get('/',async(req,res)=>{
    const items=await Item.find();
    res.json(items);
});

router.put('/update/:id',async(req,res)=>{
    const item=await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
    await res.json(item);
});

router.delete('/delete/:id',async(req,res)=>{
    await Item.findByIdAndDelete(req.params.id);
    res.json({message:'your data has been deleted'});
});

module.exports=router;
