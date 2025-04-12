const express = require('express')

const router = express.Router();
const sellOrder = require('../model/sellorder.model')

router.get('', async (req, res) => {
  const order = await sellOrder.find();
  res.json(order);
})

router.post('/add', async (req, res)=> {
  const order = new sellOrder(req.body);
  await order.save()
  res.status(201).json(order)
})

router.put('/update/:id', async (req, res)=> {
  const order = await sellOrder.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(order)
})

router.get('/:name', async (req, res)=>{
  const items = await Item.find({itemId: {$regex: req.params.name, $options: 'i'}})
  res.json(items)
})


router.delete('/delete/:id', async (req, res) => {
  await sellOrder.findByIdAndDelete(req.params.id);
  res.status(201).json('Order Deleted')
})

module.exports = router;