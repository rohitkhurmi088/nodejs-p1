/****________PRODUCTS CONTROLLER_____________*****/
//include products[] in controller from routes after creating controller
//const products = [];

//Product Model
const Product = require('../models/product');

//__________________ADMIN.js :Router____________________

//GET:(form data) added products: '/admin/add-products
module.exports.getAddProduct = (req, res, next) => {
	res.render('add-product', {
		title: 'Add Products',
		path: '/admin/add-product',
		activeAddProduct: true,
	});
};

//POST:(form data) Post added products: '/admin/add-product'
module.exports.postAddProduct = (req, res, next) => {
	//products.push({ title: req.body.title });
	
	//create new object based on Class->Model
	const product = new Product(req.body.title); 
	product.save(); //calling save:method defined in Class->Model

	//console.log('productsList', products); //products[]
	res.redirect('/'); //goto shop page
};

//__________________SHOP.js :Router(users)_________________

//Display list of products (added by the Admin)
module.exports.getProducts = (req, res, next) => {

	//const products = Product.fetchAll(); //calling fetchAll:method defined in Class->Model
	
	Product.fetchAll(products =>{
		res.render('product-list', {
			title: 'Shop-list',
			prods: products, //products[]
			path: '/',
			hasProducts: products.length > 0,
			activeShop: true,
		});
	});	
};
