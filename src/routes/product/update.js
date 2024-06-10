const express = require('express')

const Product = require('../../models/product')

const router = express.Router();

router.post('/update/:id', async (req, res, next) => {
    const { id } = req.params
    const { title, price, count, img, colors } = req.body;

    if((!title && !price && !count && !img && !colors ) || !id) {
        const error = new Error('bad request');
        error.status = 400;

        return next(error);
    }

    try {
        const product = await Product.findByIdAndUpdate(id, {
            title, price, count, img, colors
        }, { new: true })

        return res.status(200).json({ product })
    } catch(err) {
        return next(err)
    }
})

module.exports = router;