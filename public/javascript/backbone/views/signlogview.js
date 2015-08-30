App.Views.Signlog = Backbone.View.extend({
  el: '#wrapper',

  initialize: function() {
      this.template = Handlebars.compile($('#sign-log-template').html());
        console.log('sign and log in view loaded');
    	// this.listenTo(this.collection, 'reset', this.render)
      this.render();
  },
  render: function() {
    $.ajax({
        url: '/sessions',
        type: 'GET',
        success: function(data) {
           
            if (data){
              
              $.ajax({
                  type: 'GET',
                  url: 'customers/'+ data,
                  success: function(data) {
                    var template = Handlebars.compile($('#sign-log-template').html());
                    $('#sign-log').empty();
                    $('#sign-log').append(template(data));   
                  }
                });
            }
              else{

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
    // $('#page').empty();
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
		    success: function(){
              
        }
		});
    this.render();
	},
  cartPage: function() {
    console.log('cart page clicked');

    // -------templates required for the cart page--------
    var template = Handlebars.compile($('#cart-template').html());
    var template1 = Handlebars.compile($('#temp-cart').html());
    var template2 = Handlebars.compile($('#temp-cart-bottom').html());
    var template3 = Handlebars.compile($('#checkout-template').html());

     $('#page').empty();
     $('#page-table').empty();
     $('#page-table').append(template1()); //just appending a header template
    

    var cartObj =[];

    for (var key in sessionStorage) {  //iterating over sessionStorage object and 
        cartObj.push(JSON.parse(sessionStorage[key])); //pushing into empty array cartObj
    }

    var car = {     //Just inserting a cartObj in an obj , so we can pass an object into the template
        obj: cartObj
    }
         
         $('#page-table').append(template(car)); //appending the list of products objects template in the cart view
        
         
         var sum =0;
         for (var key in car.obj) {   //calculating the total price of the added products
            sum = sum+ car.obj[key].price;
         }

         var total = {  //just inserting the sum in an object, so we can pass it to a template
            sum: sum
         }
            
            localStorage.setItem("total_price", sum);
            localStorage.setItem("customer_id", user_id);

            $('#page-table').append(template2(total)); //appending the template that has total price on it
 
            $.ajax({          //ajax call to get the customer id from session to add it to the data-value of the checkout button
            url: '/sessions',
            type: 'GET',
            success: function(data) {
                var sessObj = {
                        id: data
                    }
                user_id = data
                 $('#page-table').append(template3(sessObj));
                
            },            
            fail: function(){
                var sessObj = {
                        id: null
                    }

                $('#page-table').append(template3(sessObj));
            }

        });
            console.log(App.orders);
            console.log(App.order);

            if (!App.order) {
          App.orders = new App.Collections.Orders();
            App.order = new App.Views.Order({collection: App.orders});      
        // App.order = new App.Views.Order();
        }
            
  },
  loadCustomerPage: function() {
    console.log('hello Customer');
   // $.ajax({
   //      url: '/sessions/new',
   //      type: 'GET',
   //      success: function(data) {


   //          if (data){
   //            $.ajax({
   //            type: 'GET',
   //            url: 'seekers/'+ data,
   //              success: function(data) {
   //                console.log('hello');
   //                console.log(data);
   //                var template = HandlebarsTemplates['seeker'];
   //                $('#search-bar').empty();
   //                $('#search-bar').html(template(data));   
   //              }
   //            });
   //          }
   //      }
   //  });
  }
});



