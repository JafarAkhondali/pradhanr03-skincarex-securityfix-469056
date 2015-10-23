App.Views.Signlog = Backbone.View.extend({
    el: '#wrapper',
    initialize: function() {
        this.template = Handlebars.compile($('#sign-log-template').html());
        console.log('sign and log in view loaded');
        this.render();
    },
    render: function() {
        $.ajax({
            url: '/sessions',
            type: 'GET',
            success: function(data) {
                if (data) {
                    $.ajax({
                        type: 'GET',
                        url: 'customers/' + data,
                        success: function(data) {
                            var template = Handlebars.compile($('#sign-log-template').html());
                            $('#sign-log').empty();
                            $('#sign-log').append(template(data));
                        }
                    });
                } else {
                    var template = Handlebars.compile($('#sign-log-template').html());
                    $('#sign-log').empty();
                    $('#sign-log').append(template());
                }
            }
        });
    },
    events: {
        'click .sign-in': 'signinPage',
        'click .log-in': 'loginPage',
        'click .log-out': 'logOut',
        'click .customer': 'loadCustomerPage',
        'click #checkout': 'cartPage'
    },
    signinPage: function() {
        console.log('signin clicked');
        $('#page').empty();
        App.customers = new App.Collections.Customers();
        App.signin = new App.Views.Signin({
            collection: App.customers
        });
        App.customers.fetch({
            reset: true
        });
    },
    loginPage: function() {
        console.log('login clicked');
        App.customers = new App.Collections.Customers();
        App.login = new App.Views.Login({
            collection: App.customers
        });
        App.customers.fetch({
            reset: true
        });
    },
    logOut: function() {
        console.log('log me out bro!');
        $.ajax({
            url: '/sessions',
            type: 'DELETE',
            success: function() {}
        });
        this.render();
        $('#page-table').empty();
        var template = Handlebars.compile($('#home-template').html());
        $('#page').empty();
        $('#page').append(template);
    },
    cartPage: function() {
        console.log('cart page clicked');

        // -------templates required for the cart page--------
        var template = Handlebars.compile($('#cart-template').html()); //Multiple templates were required because only the items added in cart needed to be looped while the certain area didn't 
        var template1 = Handlebars.compile($('#temp-cart').html());
        var template2 = Handlebars.compile($('#temp-cart-bottom').html());
        var template3 = Handlebars.compile($('#checkout-template').html());

        $('#page').empty(); //#page is the main container of the page which needs to be emptied before the table template is appended
        $('#page-table').empty(); // #page-table is the table div which is emptied to refresh the template
        $('#page-table').append(template1()); //appending a header of the table template(Product ID  Product Quantity  Price) to the table page div container

        var cartObj = []; //declaring a empty array variable
        var sum = 0;
        for (var key in sessionStorage) { //iterating over sessionStorage object and 
            cartObj.push(JSON.parse(sessionStorage[key])); //pushing the parsed values into empty array cartObj
            sum = sum + JSON.parse(sessionStorage[key]).price; //calculating the total price of the value of each items in the which was stored in the sessionStorage
        }

        var car = { //assigning cartObj as obj , so we can pass an object into the template
            obj: cartObj
        }

        $('#page-table').append(template(car)); //appending the template with the car object in the #page-table div container

        var total = { //assigning the sum in an object, so we can pass it to a template
            sum: sum
        }

        $('#page-table').append(template2(total)); //appending the template that has total price on it

        $.ajax({ //ajax call to get the customer id from session to add it to the data-value of the checkout button
            url: '/sessions',
            type: 'GET',
            success: function(data) {
                var sessObj = {
                    id: data // assiggning the user's id in sessObj to pass it to template3
                }
                user_id = data //assigning the user's id in the user_id variable globally
                if (data) {
                    $('#page-table').append(template3(sessObj)); //if user is logged in, it appends the checkout button with the user's id as a data value in it
                } else {
                    var Obj = {
                        id: null
                    }
                    $('#page-table').append(template3(Obj)); //if user is not logged in, it appends the checkout button with a null data value
                }
            },
            fail: function() {}
        });
        localStorage.setItem("total_price", sum); //Used localStorage to store "total_price" and sum as key, value pair respectively
        localStorage.setItem("customer_id", user_id); //Used localStorage to store "customer_id" and user_id as key, value pair respectively. Also user_id is a global variable that has the current session's user's id which is assigned in the Ajax request below

        console.log(App.orders);
        console.log(App.order);

        if (!App.order) { //false condition to make sure I don't instantiate the App.Views.Order({}) if it has already been instantiated once.
            App.orders = new App.Collections.Orders(); //instantiating the order collection so i can pass it on to the order view
            App.order = new App.Views.Order({ //instantiating the order view so that it can only be accessed after clicking the checkout button
                collection: App.orders
            });
        }
    },
    loadCustomerPage: function() {
        console.log('hello Customer');
    }
});
