var db = require('../db.js');

module.exports.Category = {

  all : function (callback) {
    db.all('categories', function (categories) {

      console.log(categories);
      var data={
        categories: categories
      }
      callback(data);
    });
  }
   
}



