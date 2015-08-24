App.Views.Signlog = Backbone.View.extend({
  el: '#wrapper',

  initialize: function() {
      this.template = Handlebars.compile($('#sign-log-template').html());
        console.log('sign and log in view loaded');
    	// this.listenTo(this.collection, 'reset', this.render)
      this.render();
  },
  render: function() {
    $.ajax({
        url: '/sessions',
        type: 'GET',
        success: function(data) {
           
            if (data){
              
              $.ajax({
                  type: 'GET',
                  url: 'customers/'+ data,
                  success: function(data) {
                    var template = Handlebars.compile($('#sign-log-template').html());
                    $('#sign-log').empty();
                    $('#sign-log').append(template(data));   
                  }
                });
            }
              else{

                var template = Handlebars.compile($('#sign-log-template').html());
                $('#sign-log').empty();
                $('#sign-log').append(template()); 
                
              }
          }
         
      });
  },
  events: {
    'click .sign-in': 'signinPage',
    'click .log-in': 'loginPage',
		'click .log-out': 'logOut',
    'click .customer': 'loadCustomerPage'
 	},
  signinPage: function() {
    console.log('signin clicked');
    $('#page').empty();
        App.customers = new App.Collections.Customers();
        App.signin = new App.Views.Signin({
            collection: App.customers
        });
        App.customers.fetch({
            reset: true
        });
  },
  loginPage: function() {
    console.log('login clicked');
    // $('#page').empty();
        App.customers = new App.Collections.Customers();
        App.login = new App.Views.Login({
            collection: App.customers
        });
        App.customers.fetch({
            reset: true
        });
  },
	logOut: function() {
		console.log('log me out bro!');
		$.ajax({
		    url: '/sessions',
		    type: 'DELETE',
		    success: function(){
              
        }
		});
    this.render();
	},
  loadCustomerPage: function() {
    console.log('hello Customer');
   // $.ajax({
   //      url: '/sessions/new',
   //      type: 'GET',
   //      success: function(data) {


   //          if (data){
   //            $.ajax({
   //            type: 'GET',
   //            url: 'seekers/'+ data,
   //              success: function(data) {
   //                console.log('hello');
   //                console.log(data);
   //                var template = HandlebarsTemplates['seeker'];
   //                $('#search-bar').empty();
   //                $('#search-bar').html(template(data));   
   //              }
   //            });
   //          }
   //      }
   //  });
  }
});



