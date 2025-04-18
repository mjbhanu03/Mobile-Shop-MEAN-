const express=require('express');
const router=express.Router();
const Purchase=require('../model/purchase.model');

router.post('/add',async(req,res)=>{
    const purchase=new Purchase(req.body);
    await purchase.save();
    res.send(purchase);
});

router.get('/',async(req,res)=>{
    const purchases=await Purchase.find();
    res.send(purchases);
});

router.get('/:id', async (req, res)=>{
  const purchases = await Purchase.find({purchaseOrder:  req.params.id})
  res.json(purchases)
})


router.put('/update/:id',async(req,res)=>{
    const puchase=await Purchase.findByIdAndUpdate(req.params.id,req.body,{new:true});
    await res.send(puchase);
});

router.delete('/delete/:id',async(req,res)=>{
    await Purchase.findByIdAndDelete(req.params.id);
    res.send({message:'your data has been deleted'});
});

module.exports=router;
