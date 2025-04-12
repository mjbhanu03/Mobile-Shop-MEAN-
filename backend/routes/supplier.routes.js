const express=require('express');
const router=express.Router();
const Supplier=require('../model/supplier');

router.post('/',async(req,res)=>{
    const supplier=new Supplier(req.body);
    await supplier.save();
    res.send(supplier);
});

router.get('/',async(req,res)=>{
    const suppliers=await Supplier.find();
    res.send(suppliers);
});

router.put('/:id',async(req,res)=>{
    const supplier=await Supplier.findByIdAndUpdate(req.params.id,req.body,{new:true});
    await res.send(supplier);
});

router.delete('/:id',async(req,res)=>{
    await Supplier.findByIdAndDelete(req.params.id);
    res.send({message:'your data has been deleted'});
});

module.exports=router;