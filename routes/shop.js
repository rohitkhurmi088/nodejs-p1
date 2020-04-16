const express = require('express');
const router = express.Router();

const path = require('path');
//get current directory
//const rootDir = require('../util/path');

/****GET the products from (admin router)****/
//const adminData = require('./admin'); //require admin route
/* products[] created in 'admin.js-->show in 'shop.js'*/
//const products = adminData.products //products[] -> admin.js

const shopController = require('../controllers/shop');

//_______________________(what user sees: shop)____________________________

//MAIN PAGE:: index.js (Front page of Shop)
router.get('/', shopController.getIndex);

//Display list of products (added by the Admin)
router.get('/products', shopController.getProducts);

//_ _ _ _ _ _ _ _ _ _ _ _ _ _ _  _ _ _ _ _ _ _ _ _ _

//SHOP: CART
router.get('/cart', shopController.getCart);

//SHOP:ORDERS
router.get('/orders', shopController.getOrders);

//SHOP:CHECKOUT
router.get('/checkout', shopController.getCheckout);



module.exports = router;