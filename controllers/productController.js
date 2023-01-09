const Product = require('../models/productModels');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middleware/catchAsyncError');
const ApiFeatures = require('../utils/apiFeatures');


// Create Product  --> admin route

createProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})

// Get All Product

getAllProducts = catchAsyncErrors(async (req, res) => {
    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter();
    let products = await apiFeature.query;

    res.status(200).json({
        success: true,
        products
    })
})

// single product

getProductDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('product not found', 404));
    }
    res.status(200).json({
        success: true,
        product
    })
}
)
// update products --> admin route

updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('product not found', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false });
    res.status(200).json({
        success: true,
        product
    })

})

// delete product

deleteProduct = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('product not found', 404));
    }

    await product.remove();
    res.status(200).json({ success: true, message: 'product deleted successfuly' })
})

module.exports = { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails };