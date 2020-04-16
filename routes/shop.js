const express = require('express');
const router = express.Router();

const path = require('path');
//get current directory
//const rootDir = require('../util/path');

/****GET the products from (admin router)****/
//const adminData = require('./admin'); //require admin route
/* products[] created in 'admin.js-->show in 'shop.js'*/
//const products = adminData.products //products[] -> admin.js

const productsController = require('../controllers/products');

//_______________________(what user sees: shop)____________________________

//Display list of products (added by the Admin)
router.get('/', productsController.getProducts);




module.exports = router;