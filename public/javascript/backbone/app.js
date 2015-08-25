App = {
    Collections: {},
    Models: {},
    Views: {}
}
var user_id = null;
$(function() {
    App.customers = new App.Collections.Customers();
    App.signlog = new App.Views.Signlog({collection: App.customers});
    App.customers.fetch({
        reset: true
    });
    $('#checkout').click(cartPage);
    $('.products').click(productPage);
    $('.company').click(companyPage);
    
    // $('.sign-in').click(signinPage);
    // $('.log-in').click(loginPage);
       

});



var productPage = function() {
     console.log('product clicked');

       
        App.products = new App.Collections.Products();
         
        App.ProductsView = new App.Views.ProductsView({
            collection: App.products
        })

        App.products.fetch({
            reset: true
        });

    };

var companyPage = function() {
     console.log('company clicked');
     var template = Handlebars.compile($('#company-template').html());
     $('#page').empty();
     $('#page').append(template);
       
    };

var counter = 0;

var cartPage = function() {
    console.log('cart page clicked');

    // -------templates required for the cart page--------
    var template = Handlebars.compile($('#cart-template').html());
    var template1 = Handlebars.compile($('#temp-cart').html());
    var template2 = Handlebars.compile($('#temp-cart-bottom').html());
    var template3 = Handlebars.compile($('#checkout-template').html());

     $('#page').empty();
     $('#page').append(template1()); //just appending a header template
    

    var cartObj =[];

    for (var key in sessionStorage) {  //iterating over sessionStorage object and 
        cartObj.push(JSON.parse(sessionStorage[key])); //pushing into empty array cartObj
    }

    var car = {     //Just inserting a cartObj in an obj , so we can pass an object into the template
        obj: cartObj
    }
         
         $('#page').append(template(car)); //appending the list of products objects template in the cart view
        
         
         var sum =0;
         for (var key in car.obj) {   //calculating the total price of the added products
            sum = sum+ car.obj[key].price;
         }

         var total = {  //just inserting the sum in an object, so we can pass it to a template
            sum: sum
         }
            
            localStorage.setItem("total_price", sum);

            $('#page').append(template2(total)); //appending the template that has total price on it
 
            $.ajax({          //ajax call to get the customer id from session to add it to the data-value of the checkout button
            url: '/sessions',
            type: 'GET',
            success: function(data) {
                var sessObj = {
                        id: data
                    }
                user_id = data
                 $('#page').append(template3(sessObj));
                
            },            
            fail: function(){
                var sessObj = {
                        id: null
                    }

                $('#page').append(template3(sessObj));
            }

        });
            App.orders = new App.Collections.Orders();
            App.order = new App.Views.Order({collection: App.orders});
}






