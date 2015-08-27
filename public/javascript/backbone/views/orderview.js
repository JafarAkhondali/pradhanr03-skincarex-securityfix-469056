App.Views.Order = Backbone.View.extend({

	el: '#page-container',

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
		'click #shipping': 'confirmShipping',
		'click #submitBtn': 'payment'
		// 'click #shipping': 'confirmStripe' //this is for the actual stripe template
	},
	checkOut: function () {
		console.log('clicked checkout');
		$('#page-table').empty();

		// var id = $('#checkout-button').data('value');

		// console.log(id);
		if (user_id) {       //if user is logged in take them to next step
			$('#page').append(this.template());
		}
			else { //if user is not logged in, log them in to go to next step
				


		        App.login = new App.Views.Login({
		            collection: App.customers
		        });
		    }

		   
	},
	confirmStripe: function() {
		var template = Handlebars.compile($('#stripe-template').html());
        $('#page').empty();
        $('#page').append(template());


	},
	confirmShipping: function() {
		console.log('shipping button clicked');
		

        var ship = $('[name=name]').val()+" "+$('[name=email]').val()+" "+$('[name=state]').val()+" "+$('[name=zipcode]').val()+" "+$('[name=country]').val();
        var bill = $('[name=bname]').val()+" "+ $('[name=bemail]').val()+" "+$('[name=bstate]').val()+" "+$('[name=bzipcode]').val()+" "+$('[name=bcountry]').val();




           //storing tha values in local storage, so that when payment is successful, the data is added into the order table.
        localStorage.setItem("shipping_address", ship);
        localStorage.setItem("billing_address", bill);

       
        
        var template = Handlebars.compile($('#payment-template').html());
        $('#page').empty();
        $('#page').append(template());
	},
	payment: function() {
		console.log('payment button clicked');
			
		// var customer_id = JSON.parse(localStorage.getItem("customer_id"));
		var shipping_address = localStorage.getItem("shipping_address");
       	var billing_address = localStorage.getItem("billing_address"); 
       	var total_price = JSON.parse(localStorage.getItem("total_price")); 

       	var cartObj =[];

	    for (var key in sessionStorage) {  //iterating over sessionStorage object and 
	        cartObj.push(JSON.parse(sessionStorage[key])); //pushing into empty array cartObj
	    }

       	var data = {
       		customer_id: user_id,
       		shipping_address: shipping_address,
       		billing_address: billing_address,
       		total_price: total_price,
       		product_items: cartObj
       	};

       	console.log(data);

          $.ajax({
            type: "POST",
            url: '/orderscustomers',
            data: data,
           success: function(){
             
              
           },
           fail: function(){
           }
          });

          sessionStorage.clear();
          localStorage.clear();

          var template = Handlebars.compile($('#thanks-template').html());
        $('#page').empty();
        $('#page').append(template());


       
    }
	
});