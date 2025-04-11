const express = require('express')

const router = express.Router();

const Purchase = require('../model/purchase.model')

router.get('', async (req, res)=> {
  const purchase = await Purchase.find()
  res.json(purchase)
})

module.exports = router;