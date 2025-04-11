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

<<<<<<< HEAD
router.post('/add', async (req, res)=>{
  const data = new Purchase(req.body)
  await data.save()
  res.json('Added Successfully')
})

router.delete('/delete/:id', async (req, res)=>{
  await Purchase.findByIdAndDelete(req.params.id)
  res.json('Deleted Successfully')
})

router.put('/update/:id', async (req, res)=>{
  await Purchase.findByIdAndUpdate(req.params.id, req.body, {new: true})
  res.json('Update Successfully')
})
module.exports = router;
=======
router.delete('/:id',async(req,res)=>{
    await Purchase.findByIdAndDelete(req.params.id);
    res.send({message:'your data has been deleted'});
});

module.exports=router;
>>>>>>> 97deeac2618ee734410afb4456030eab0469d709
