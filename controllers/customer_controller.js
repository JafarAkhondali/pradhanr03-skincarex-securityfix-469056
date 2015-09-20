var bcrypt = require('bcrypt');

var Customer = require('../models/customer.js').Customer;

module.exports.controller = function(app) {

    //CUSTOMER INDEX
    //this renders all the customers in the customers table INDEX

    app.get('/customers', function(req, res) {
        Customer.all(function(data) {

            res.json(data);
        });
    });

    app.get("/customers/:id", function(req, res) {
        Customer.find(req.params.id, function(customer) {

            console.log(">>>>>>>>>>>");

            res.json(customer);
        });
    });

    app.post('/users', function(req, res) { //create new users
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            Customer
                .create({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                }, function(user) {
                    // res.render('login');
                    console.log('user signed in');
                });
        });
    });

    app.post('/sessions', function(req, res) { //log in users
        var email = req.body.email;
        var password = req.body.password;
        console.log(email);
        console.log(password);
        console.log(req.session);
        // var logg = $('.sign');
        Customer
            .findUser(email, function(user) {
                console.log(user);

                if (user) {
                    bcrypt.compare(password, user.password, function(err, result) {
                        if (result) {
                            req.session.currentUser = user.id;
                            // req.session.name = user.name;
                            // var data= {
                            // 	currentUser: req.session.currentUser,
                            // 	currentName: req.session.name
                            // }
                            // res.send(user);
                            res.json(req.session.currentUser);
                            // res.redirect('userPage', user);

                        } else {
                            res.status(400);
                            res.send({
                                err: 400,
                                msg: 'Incorrect password'
                            });
                        }
                    });
                } else {

                    // var data1= {
                    //      	currentUser: null
                    //      }
                    res.json(null);
                }
            });
    });

    app.get('/sessions', function(req, res) { //check the current user

        if (req.session.currentUser) {

            Customer
                .find(req.session.currentUser,
                    function(user) {
                        res.json(user.id);
                    });
        } else {
            // var data= {
            // 	currentUser: null
            // }
            res.json(null);
        }
    });


    app.delete('/sessions', function(req, res) {
        console.log('hello');
        req.session.currentUser = null;
        req.session.name = null;
        res.json(null);

    });

    app.get('/current_user', function(req, res) { //not sure what to do with this?
        if (req.session.currentUser) {

            Customer
                .find(req.session.currentUser,
                    function(user) {
                        res.json(user);
                    });
        } else {
            res.json(null);
        }
    });


    app.post('/posts', function(req, res) {

        if (req.session.currentUser) {
            Customer
                .createComments({
                    description: req.body.description,
                    customer_id: req.session.currentUser,
                    product_id: req.body.product_id
                }, function(newpost) {

                    console.log(newpost);
                    res.json(newpost);
                });
        } else {
            res.status(403);
            res.redirect('/');
        }
    });

};
