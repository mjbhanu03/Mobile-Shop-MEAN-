const express=require('express');
const router=express.Router();
const Purchase=require('../model/purchase');

router.post('/',async(req,res)=>{
    const purchase=new Purchase(req.body);
    await purchase.save();
    res.send(purchase);
});

router.get('/',async(req,res)=>{
    const purchases=await Purchase.find();
    res.send(purchases);
});

router.put('/:id',async(req,res)=>{
    const puchase=await Purchase.findByIdAndUpdate(req.params.id,req.body,{new:true});
    await res.send(puchase);
});

router.delete('/:id',async(req,res)=>{
    await Purchase.findByIdAndDelete(req.params.id);
    res.send({message:'your data has been deleted'});
});

module.exports=router;