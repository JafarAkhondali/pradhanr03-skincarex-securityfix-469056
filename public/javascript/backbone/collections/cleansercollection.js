App.Collections.Cleansers = Backbone.Collection.extend({
	url: "/categoriesprod/4", 	
	model: App.Models.Category,

	initialize: function() {
		console.log('category collection created');
	}

})