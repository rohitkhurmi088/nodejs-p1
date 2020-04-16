const express = require('express');
const router = express.Router();

const path = require('path');
//get current directory
//const rootDir = require('../util/path');

const productsController = require('../controllers/products');

//productList array
//const products = [] ;


//_______________________(what admin can do:)____________________________

//GET:(form data) added products: '/admin/add-products
router.get('/add-product', productsController.getAddProduct);


//POST:(form data) Post added products: '/admin/add-product'
router.post('/add-product', productsController.postAddProduct);






//exporting admin.js routes
/*NOTE::exports.routes = router;
In app.js --> use adminRoutes.routes*/
module.exports = router;
//exports.routes = router; //routes object

//Now export products added by admin: display on product-list(shop.js)
//exports.products = products;