App.Models.Customer = Backbone.Model.extend({

	urlRoot: '/customers',
	tagName: 'div',

	initialize: function () {
		console.log('Customer model created');
	}

})