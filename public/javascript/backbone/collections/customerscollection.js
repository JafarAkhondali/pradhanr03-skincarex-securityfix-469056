App.Collections.Customers = Backbone.Collection.extend({
    url: '/customers',
    model: App.Models.Customer,
    initialize: function() {
        console.log('Customers collection created');
    }
});
