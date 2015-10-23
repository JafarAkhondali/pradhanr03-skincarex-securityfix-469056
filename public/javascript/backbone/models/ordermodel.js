App.Models.Order = Backbone.Model.extend({
    urlRoot: '/orderscustomers',
    tagName: 'div',
    initialize: function() {
        console.log('order model created');
    }
});
