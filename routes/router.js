const express = require('express')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')

const router = new express.Router()
const jwtMiddleware = require('../middlewares/jwtMiddleware')

//get all products
router.get('/all-products',productController.getAllProductsController)

//view a products
router.get('/:id/view-product',productController.getAProductController)

//register
router.post('/register',userController.registerController)
module.exports = router

//login
router.post('/login',userController.loginController)

//add to wishlist
router.post('/addToWishlist',jwtMiddleware, wishlistController.addToWishlist)

//get wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlist)

//remove wishlist
router.delete('/wishlist/:id/remove',jwtMiddleware,wishlistController.removeWishlistItem)

//add to cart
router.post('/addToCart',jwtMiddleware, cartController.addToCart)

//get cart
router.get('/get-cart',jwtMiddleware,cartController.getCart)

//remove cart item
router.delete('/cart/:id/remove',jwtMiddleware,cartController.removeCartItem)

//increment cart
router.get('/cart/:id/increment',jwtMiddleware,cartController.incrementCart)

//decrement cart
router.get('/cart/:id/decrement',jwtMiddleware,cartController.decrementCart)

//empty cart
router.delete('/empty-cart',jwtMiddleware,cartController.emptyCart)


module.exports = router