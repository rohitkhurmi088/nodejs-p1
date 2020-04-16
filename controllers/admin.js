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
    
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
	
	//create new object based on Class->Model
    //const product = new Product(req.body.title); 
    
    const product = new Product(title, imageUrl, price ,description);
	product.save(); //calling save:method defined in Class->Model

	//console.log('productsList', products); //products[]
	res.redirect('/'); //goto shop page
};


//admin product-list:GET '/admin/products'
//(same as products displayed on shop page)
module.exports.getProducts = (req,res,next)=>{
    Product.fetchAll(products =>{
		res.render('admin-product-list', {
			title: 'Admin-Shop',
			prods: products, //products[]
			path: '/admin/products',
			hasProducts: products.length > 0,
			activeAdminShop: true,
		});
	});
}