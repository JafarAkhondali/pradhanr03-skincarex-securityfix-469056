App = {
    Collections: {},
    Models: {},
    Views: {}
}

$(function() {
    App.customers = new App.Collections.Customers();
    App.signlog = new App.Views.Signlog({collection: App.customers});
    App.customers.fetch({
        reset: true
    });
    $('#checkout').click(cartPage);
    $('.products').click(productPage);
    $('.company').click(companyPage);
    console.log("PAGE LOAD")
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

    var template = Handlebars.compile($('#cart-template').html());
    var template1 = Handlebars.compile($('#temp-cart').html());
    var template2 = Handlebars.compile($('#temp-cart-bottom').html());
    var template3 = Handlebars.compile($('#checkout-template').html());
     $('#page').empty();
     $('#page').append(template1());
    
    var cartObj =[];
    for (var key in sessionStorage) {
        cartObj.push(JSON.parse(sessionStorage[key]));
    }

    var car = {
        obj: cartObj
    }
         
         $('#page').append(template(car));
        
         
         var sum =0;
         for (var key in car.obj) {

            sum = sum+ car.obj[key].price;
         }

         var total = {
            sum: sum
         }
            
            $('#page').append(template2(total));

            $.ajax({
            url: '/sessions',
            type: 'GET',
            success: function(data) {
                var sessObj = {
                        id: data
                    }

                 $('#page').append(template3(sessObj));
                
            },            
            fail: function(){
                var sessObj = {
                        id: null
                    }
                $('#page').append(template3(sessObj));
            }

        });
}






