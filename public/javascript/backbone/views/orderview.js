App.Views.Order = Backbone.View.extend({

	el: '#page',

	initialize: function () {
		console.log('Order view created');
		// this.listenTo(this.collection, 'reset', this.renderAll)
		this.template = Handlebars.compile($('#order-address-template').html());

		
	},
	renderOne: function () {
		
		// var viewthis = new App.Views.ProductView({ model: product });
		
		// this.$el.append(viewthis.el);
	},
	events: {
		'click #checkout-button': 'checkOut',
		'click #shipping': 'confirmShipping'
	},
	checkOut: function () {
		console.log('clicked checkout');
		$('#page').empty();

		// var id = $('#checkout-button').data('value');

		// console.log(id);
		if (user_id) {       //if user is logged in take them to next step
			$('#page').append(this.template());
		}
			else { //if user is not logged in, log them in to go to next step
				
		        App.login = new App.Views.Login({
		            collection: App.customers
		        });
		        App.customers.fetch({
		            reset: true
		        });
			}
	},
	confirmShipping: function() {
		console.log('shipping button clicked');
		

		// var data = {
  //           customer_id: user_id,
  //           shipping_address: ($('[name=name]').val()+" "+$('[name=email]').val()+" "+$('[name=state]').val()+" "+$('[name=zipcode]').val()+" "+$('[name=country]').val()), 
  //           billing_address: ($('[name=bname]').val()+" "+ $('[name=bemail]').val()+" "+$('[name=bstate]').val()+" "+$('[name=bzipcode]').val()+" "+$('[name=bcountry]').val())
           
  //       };
        var ship = $('[name=name]').val()+" "+$('[name=email]').val()+" "+$('[name=state]').val()+" "+$('[name=zipcode]').val()+" "+$('[name=country]').val();
        var bill = $('[name=bname]').val()+" "+ $('[name=bemail]').val()+" "+$('[name=bstate]').val()+" "+$('[name=bzipcode]').val()+" "+$('[name=bcountry]').val();




        localStorage.setItem("customer_id", user_id);   //storing tha values in local storage, so that when payment is successful, the data is added into the order table.
        localStorage.setItem("shipping_address", ship);
        localStorage.setItem("billing_address", bill);
        


	}
	
});