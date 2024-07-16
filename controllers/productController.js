const products = require('../models/productModel');
const wishlists = require('../models/wishlistModel');

//get all products
exports.getAllProductsController = async(req,res)=>{
    console.log('inside getAllProductsController');
    try{
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    }catch(err){
        res.status(401).json(err)
    }
}

//view single product
exports.getAProductController = async(req,res)=>{
    console.log('inside viewAllProductsController');
    const {id} = req.params
    console.log(id);
    try{
        const singleProduct = await products.findOne({id})
        res.status(200).json(singleProduct)
    }catch(err){
        res.status(401).json(err)
    }
}

