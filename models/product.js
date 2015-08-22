var db = require('../db.js');

module.exports.Product = {

  all : function (callback) {
    db.all('products', function (products) {

      console.log(products);
      var data={
        products: products
      }
      callback(data);
    });
  },
   find : function(id, callback){
    db.find('products', id, function (data) {
      console.log(data);
      console.log(data[0]);
      callback( data[0]);
    });
  },
  getWithComments : function( id, callback){
    db.find('products', id, function (product) {
      db.findRelations('comments', 'product_id', id, function (comments) {
        db.all('customers', function (customers) {
          var data = {
          product: product[0],
          comments: comments[0],
          customers: customers
        };
        console.log(data);
        callback(data);
        });
      });
    });
  },
   
}



