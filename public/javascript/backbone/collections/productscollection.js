
App.Collections.Products = Backbone.Collection.extend({

	url: '/products',
	model: App.Models.Product,

	initialize: function() {
		console.log('product collection created');
	},
	fetchById: function(id) {

      
        $.ajax({
            url: this.url + '/' + id,
            type: 'GET',
            success: function(data) {
                
              
                var modal = new App.Views.Modal({model:data});
                
            }
        });
    }

});