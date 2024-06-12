const express = require('express');
const Product = require('../../models/product')

const router = express.Router();

router.get('/all', async (req, res, next) => {
    let products = [];
    try {
        products = await Product.find({})
    } catch(err) {
        return next(err)
    }

    res.status(200).json({ products });
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;

    if(!id) {
        const error = new Error('post id is required');
        error.status = 400;

        return next(error);
    }

    let product;

    try {
        product = await Product.findById(id)
    } catch(err) {
        return next(err)
    }

    res.status(200).json({ product })
})

module.exports = router