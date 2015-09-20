var db = require('../db.js');

module.exports.Category = {

    all: function(callback) {
        db.all('categories', function(categories) {

            console.log(categories);
            var data = {
                categories: categories
            }
            callback(data);
        });
    },
    allCategory: function(callback) {
        db.allCategory('categories', 'products', 'id', 'category_id', function(categories) {

            console.log(categories);

            callback(categories);
        });
    },
    allFromCategory: function(id, callback) {
        db.allFromCategory('categories', 'products', 'id', 'category_id', id, function(categories) {


            console.log(categories);

            callback(categories);
        });
    }

}
