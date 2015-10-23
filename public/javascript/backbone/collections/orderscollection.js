App.Collections.Orders = Backbone.Collection.extend({
    url: '/orderscustomers',
    model: App.Models.Order,
    initialize: function() {
        console.log('order collection created');
    },
    fetchById: function(id) {
        $.ajax({
            url: this.url + '/' + id,
            type: 'GET',
            success: function(data) {}
        });
    }
});
