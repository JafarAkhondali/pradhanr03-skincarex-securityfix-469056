
App.Collections.Categories = Backbone.Collection.extend({

	url: '/categories',
	model: App.Models.Category,

	initialize: function() {
		console.log('category collection created');
	}

})