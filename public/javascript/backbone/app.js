App = {
    Collections: {},
    Models: {},
    Views: {}
}

$(function() {
    //set viz_wrapper to hide
    // $('#viz_wrapper').hide();
    
    // $('#nav').click(function() {
    //     $('#viz_wrapper').show();
    // })

    // $('#close').click(function() {
    //     $('#viz_wrapper').hide();
    // })


    $('.products').click(function() {
        
        // $('#page').empty();
        // $('#stocks-container').empty();
        // $('#bots-container').empty();
        // $('#companies-container').empty();
        // $('#users-container').empty();
        console.log('product clicked');
        // App.categories = new App.Collections.Categories();
         
        // App.categoriesView = new App.Views.CategoriesView({
        //     collection: App.categories
        // })
        // App.categories.fetch({
        //     reset: true
        // });

    App.products = new App.Collections.Products();
         
        App.ProductsView = new App.Views.ProductsView({
            collection: App.products
        })
        App.products.fetch({
            reset: true
        });
       
    });


    // $('#showusers').click(function() {
    //     $('#container').empty();
    //     // $('#bots-container').empty();
    //     // $('#stocks-container').empty();
    //     // $('#companies-container').empty();
    //     // $('#users-container').empty();
    //     App.users = new App.Collections.Users;
    //     App.usersView = new App.Views.UsersView({
    //         collection: App.users
    //     })
    //     App.users.fetch({
    //         reset: true
    //     });
});