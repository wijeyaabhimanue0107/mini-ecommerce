const productModel = require('../models/productModel');

//Get Products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
    const products = await productModel.find({})
    res.json({
        success: true,
        products
    });
}

//Get Single Products API - /api/v1/products/:id
exports.getSingleProducts = async (req, res, next) => {
    try {
        const product = await productModel.findById(req.params.id);
        res.json({
            success: true,
            product
        });
    }
    catch(error) {
        res.status(404).json({
            success: true,
            message: error.message ? error.message : 'Product not found'
        });
    }
}