var db = require('../db.js');

module.exports.Customer = {

    all: function(callback) {
        db.all('customers', function(customers) {
            console.log(customers);
            var data = {
                customers: customers
            }
            callback(data);
        });
    },
    create: function(obj, callback) {
        db.create('customers', obj, function(data) {
            callback(data);
        });
    },
    find: function(id, callback) {
        db.find('customers', id, function(data) {
            callback(data[0]);
        });
    },
    findUser: function(user, callback) {
        db.findUser('customers', user, function(data) {

            callback(data[0]);
        });
    }

};
