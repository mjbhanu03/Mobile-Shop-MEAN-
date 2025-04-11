const express = require('express')

const router = express.Router();

const Purchase = require('../model/purchase.model')

router.get('', async (req, res)=> {
  const purchase = await Purchase.find()
  res.json(purchase)
})

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