App.Views.Signin = Backbone.View.extend({

	el: '#page',

	initialize: function () {
		console.log('sign in page loaded');
		this.template = Handlebars.compile($('#signin-template').html());
		this.render();
	},

	render: function () {
		this.$el.empty();
		this.$el.append(this.template());
	},
	events: {
		'click #signup-button': 'createCustomer'
	},
	createCustomer: function() {


      	var data = {
            
            email: $('[name=email]').val(),
            password: $('[name=password]').val(),
            name: $('[name=name]').val()
        };

       var data1 = {
            
            email: $('[name=email]').val(),
            password: $('[name=password]').val()
      };

        // this.collection.create(data);

         $.ajax({
            type: "POST",
            url: '/users',
            data: data,
           success: function(){
           	
           },
           fail: function(){
           }
          });

         	 // $.ajax({
	          //   type: "POST",
	          //   url: '/sessions',
	          //   data: data1,
	          //  success: function(){
	          //     App.signlog = new App.Views.Signlog({collection: App.customers});
	              
	          //  },
	          //  fail: function(){
	          //  }
	          // });


        // var templateAfterSign = HandlebarsTemplates['search_box'];
          
            
		console.log('what do you seek?');
     
	}

});