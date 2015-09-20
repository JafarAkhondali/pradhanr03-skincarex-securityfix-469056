var Category = require('../models/category.js').Category;

module.exports.controller = function(app) {


    app.get('/categories', function(req, res) {

        Category.all(function(categories) {

            console.log(categories);
            // res.send('hello');
            res.json(categories);
        });
    });

    app.get('/categoriesprod', function(req, res) {

        Category.allCategory(function(antioxidants) {

            console.log(antioxidants);
            // res.send('hello');
            res.json(antioxidants);
        });
    });

    app.get('/categoriesprod/:id', function(req, res) {

        Category.allFromCategory(req.params.id, function(antioxidants) {

            console.log(antioxidants);
            // res.send('hello');
            res.json(antioxidants);
        });
    });
};
