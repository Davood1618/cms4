const express = require('express');

const Product = require('../../models/product')

const router = express.Router();

router.delete('/delete/:id', async (req, res, next) => {
    const { id } = req.params;

    if(!id) {
        const error = new Error('Product id is required');
        error.status = 400;

        return next(error);
    }

    try {
        await Product.findByIdAndDelete(id) // findOneAndDelete({ _id: id })

        return res.status(200).json({ success: true })
    } catch(err) {
        return next(err)
    }
})

module.exports = router;