const express = require('express')

const router = express.Router();
const Customer = require('../model/customer.model')
router.get('', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
})

module.exports = router;