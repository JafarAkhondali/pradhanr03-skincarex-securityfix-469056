App.Views.CleanserView = Backbone.View.extend({

	el: '#page',

	initialize: function () {

		console.log(' cleanser view created');
		console.log(this.collection);
		this.listenTo(this.collection, 'reset', this.renderAll)

		this.template = Handlebars.compile($('#page-template').html());
	},

	renderAll: function () {
		this.$el.empty();
		this.collection.each(this.renderOne, this)
		
	},

	renderOne: function (product) {
		
		console.log('hello product');
		console.log(product.toJSON());
		
		var viewthis = new App.Views.ProductView({ model: product });
		// this.$el.empty(); //added this

		// this.$el.append(viewthis.el);
		this.$el.append(viewthis.render());
		this.$el.attr('class', 'item-list');
	}
	// events: {
	// 	'click .product-modal': 'showModal'
	// },
	// showModal: function(e) {
 //        console.log('hello modal');   //need to figure out to do this without sending the e
 //        var id = $(e.target).closest('a').data('value');

       	
 //       	debugger;

 //     	 var modal = new App.Views.Modal({model: id});
 //     	 modal.fetch();


     	
 //        console.log(id);
       	
 //        // var result = this.collection.fetchById(id);
        
 //    }
	
});