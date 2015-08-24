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






