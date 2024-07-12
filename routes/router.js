const express = require('express')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')

const router = new express.Router()

//get all products
router.get('/all-products',productController.getAllProductsController)

//view a products
router.get('/:id/view-product',productController.getAProductController)

//register
router.post('/register',userController.registerController)
module.exports = router