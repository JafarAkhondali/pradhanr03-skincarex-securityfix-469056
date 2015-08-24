App.Models.Customer = Backbone.Model.extend({

	urlRoot: '/customers',
	tagName: 'div',

	initialize: function () {
		// debugger;
		console.log('Customer model created');
	}

})