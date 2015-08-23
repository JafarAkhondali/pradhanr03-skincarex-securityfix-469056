App.Views.ProductView = Backbone.View.extend({

	// el: '#container',

	initialize: function () {
		console.log('single product view created');
		this.template = Handlebars.compile($('#page-template').html());
		this.listenTo(this.model, 'change', this.renderUpdate);
		this.render();
	},

	render: function () {
		
		this.$el.append(this.template(this.model.toJSON()));
		this.$el.attr('class', 'item-list');
	},

	renderUpdate: function () {
		console.log('render updated category model')
		this.$el.html(this.template(this.model.toJSON()));
	}
	// events: {
	// 	'click .product-modal': 'showModal'
	// },
	// showModal: function(e) {
 //        console.log('hello modal');
 //        var id = $(e.target).closest('a').data('value');
 //        console.log(id);

        
 //        var result = this.collection.fetchById(id);
       
 //    }

});