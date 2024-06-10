const express = require('express');

const Product = require('../../models/product')

const router = express.Router()

router.post('/create', async (req, res, next) => {
    const { title, price, count, img, colors } = req.body

    if(!title || !price || !count || !img || !colors) {
        const error = new Error('all fields are required');
        error.status = 400;

        return next(error);
    }

    const product = new Product({
        title, price, count, img, colors
    });

    try {
        await product.save()
    } catch(err) {
        return next(err)
    }

    res.status(200).json({ product })
})

module.exports = router