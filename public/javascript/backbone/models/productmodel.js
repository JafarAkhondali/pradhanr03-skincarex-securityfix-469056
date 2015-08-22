App.Models.Product = Backbone.Model.extend({

	urlRoot: '/products',
	tagName: 'div',

	initialize: function () {
		console.log('product model created');
	}

})