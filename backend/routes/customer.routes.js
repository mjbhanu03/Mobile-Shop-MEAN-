const express = require('express')

const router = express.Router();
const Customer = require('../model/customer.model')

router.get('', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
})

router.post('/add', async (req, res)=> {
  const customer = new Customer(req.body);
  await customer.save()
  res.status(201).json('Customer Added')
})

router.put('/update/:id', async (req, res)=> {
  const cus = await Customer.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(cus)
})

router.delete('/delete/:id', async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.status(201).json('Customer Deleted')
})

module.exports = router;