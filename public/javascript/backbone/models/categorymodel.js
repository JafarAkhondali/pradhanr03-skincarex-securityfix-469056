App.Models.Category = Backbone.Model.extend({

	urlRoot: '/categories',
	tagName: 'div',

	initialize: function () {
		console.log('category model created');
	}

})