App.Collections.Products = Backbone.Collection.extend({
    url: '/products',
    model: App.Models.Product,
    initialize: function() {
        console.log('product collection created');
    }
});
