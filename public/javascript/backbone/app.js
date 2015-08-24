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

var cartPage = function() {
    console.log('cart page clicked');
    var template = Handlebars.compile($('#cart-template').html());
    var template1 = Handlebars.compile($('#temp-cart').html());
     $('#page').empty();
     $('#page').append(template1());
     var cart = {
            data: [{
            title: "Product apple",
            price: 35,
            quantity: 2
            },
            {
            title: "Product banana",
            price: 40.20,
            quantity: 8
            },
            {
            title: "Product orange",
            price: 15.50,
            quantity: 3
            }
            ]
        }

    var jsonStr = JSON.stringify( cart );
    sessionStorage.setItem( "cart", jsonStr );
    var cartValue = sessionStorage.getItem( "cart" );
    var cartObj = JSON.parse( cartValue );
       

     $('#page').append(template(cartObj));

}






