var Product = require('../models/product.js').Product;

module.exports.controller = function(app) {
  
	//PRODUCT INDEX
//this renders all the products in the products table INDEX
	app.get('/products', function (req, res) {
		debugger;
		Product.all( function (products) {

			// var user = req.session.currentUser;
			// var name = req.session.name;
			// var id = req.session.id;

			// console.log(">>>>>>>>>>>");
			
			// var data ={
			//         user: user,
			//         name: name,
			//         categories: categories
			//    }
			//    console.log(data);
			console.log(products);
			// res.send('hello');
			res.json(products);
		});
	});

	app.get("/products/:id", function (req, res) {
	    Product.getWithComments( req.params.id, function (product){
	  //    var user = req.session.currentUser;
			// var name = req.session.name;
			// var id = req.session.id;
		
			console.log(">>>>>>>>>>>");

			
			// var data ={
			//         user: user,
			//         name: name,
			//         categories: categories
			//    }
	     	res.json(product);
	    });
	});
};