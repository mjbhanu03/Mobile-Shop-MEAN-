const express = require('express')
const router = express.Router();
const Company = require('../model/company.model')

router.get('', async (req, res) => {
    const companies = await Company.find();
    res.json(companies);
    })

router.post('/add', async (req, res)=> {
    const company = new Company(req.body);
    await company.save()
    res.status(201).json('Company Added')
})

router.put('/update/:id', async (req, res) => {
    const con = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(con);
});


router.delete('/delete/:id', async (req, res) => {
    await Company.findByIdAndDelete(req.params.id);
    res.status(201).json('Company Deleted')
})
module.exports = router;