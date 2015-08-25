App.Views.ProductView = Backbone.View.extend({

	// el: '#page',
	tagName: 'div',


	initialize: function () {
		console.log('single product view created');
		this.template = Handlebars.compile($('#single-product-template').html());
		// this.listenTo(this.model, 'change', this.renderUpdate);
		// this.render();
	},

	render: function () {
		this.$el.empty(); //added this
		
		return this.$el.append(this.template(this.model.toJSON()));
		
		//return this.template(this.model.toJSON());
	},

	// renderUpdate: function () {
	// 	console.log('render updated category model')
	// 	this.$el.html(this.template(this.model.toJSON()));
	// }
	events: {
		'click': 'showModal'
	},
	showModal: function() {
       
       console.log('workk', this.model.toJSON());
       var data = this.model.toJSON();
       console.log(data);
		var modal = new App.Views.Modal({model: data});

        // console.log('hello modal');
        // var id = $(e.target).closest('a').data('value');
        // console.log(id);

        
        // var result = this.collection.fetchById(id);
       
    }

});