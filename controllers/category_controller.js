var Category = require('../models/category.js').Category;

module.exports.controller = function(app) {
  
	//ARTIST INDEX
//this renders all the artists in the artists table INDEX
	app.get('/categories', function (req, res) {
		debugger;
		Category.all( function (categories) {

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
			console.log(categories);
			// res.send('hello');
			res.json(categories);
		});
	});

	// app.get("/categories/:id", function (req, res) {
	//     Category.getWithArticles( req.params.id, function (categories){
	//      var user = req.session.currentUser;
	// 		var name = req.session.name;
	// 		var id = req.session.id;
		
	// 		console.log(">>>>>>>>>>>");

			
	// 		var data ={
	// 		        user: user,
	// 		        name: name,
	// 		        categories: categories
	// 		   }
	//       res.render('categoryList', data);
	//     });
	// });
};