/****________Shop CONTROLLER_____________*****/
//include products[] in controller from routes after creating controller
//const products = [];

//Product Model
const Product = require('../models/product');


//__________________SHOP.js :Router(users)_________________

//Display list of products (added by the Admin)
module.exports.getProducts = (req, res, next) => {
	
	//const products = Product.fetchAll(); //calling fetchAll:method defined in Class->Model
	
	Product.fetchAll(products =>{
		res.render('product-list', {
			title: 'Shop-list',
			prods: products, //products[]
			path: '/products',
			hasProducts: products.length > 0,
			activeShop: true,
		});
	});	
};


//:::MAIN PAGE::: index.js (Front page of Shop)
module.exports.getIndex = (req, res, next) =>{
	Product.fetchAll(products =>{
		res.render('index', {
			title: 'Shop',
			prods: products, //products[]
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
		});
	});
}

//_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _

//SHOP: CART
module.exports.getCart = (req, res, next) =>{
	res.render('cart',{
			path: '/cart',
			title: 'Your Cart'
	});
}

//SHOP:ORDERS
module.exports.getOrders = (req, res, next) =>{
	res.render('orders', {
		path: '/orders',
		title: 'Your Orders'
	});
}


//SHOP:CHECKOUT
module.exports.getCheckout = (req, res, next) =>{
	res.render('checkout', {
		path: '/checkout',
		title: 'Checkout'
	  });
}

