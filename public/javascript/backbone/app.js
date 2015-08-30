App = {
    Collections: {},
    Models: {},
    Views: {}
}
var user_id = null;
$(function() {
    App.customers = new App.Collections.Customers();
    App.signlog = new App.Views.Signlog({collection: App.customers});
    App.customers.fetch({
        reset: true
    });
    
    $('.products').click(productPage);
    $('.antioxidant').click(antioxidantPage);
    $('.sunscreen').click(sunscreenPage);
    $('.moisturizer').click(moisturizerPage);
    $('.cleanser').click(cleanserPage);
    $('.company').click(companyPage);
    $('#web').click(homePage);
    $('.skin').click(skinPage);
    $('.science').click(sciencePage);
    $('.chat').click(chatPage);
   
   


    
  });   




// geoAutocomplete: function(e) {
//     var keyPressed = e.keyCode || e.which;

//     // keyCode 13 is return key; keyCode 9 is tab key
//     if ((keyPressed !== 13) && (keyPressed !== 9)) {
//       $('#geolocation').val('')
//       $('#location_specific').val($('#autocomplete').val());
//       console.log('geolocation: ' + $('#geolocation').val());
//       console.log('location specific: ' + $('#location_specific').val());
//     }
//   };







    // $(this).removeClass("btn");

    
    // $('.sign-in').click(signinPage);
    // $('.log-in').click(loginPage);
     

/////////////////////STRIPE START/////////////


// var publicStripeApiKey = 'sk_live_2bIboKj22N3LV83wdNf6vigy';
// var publicStripeApiKeyTesting = 'pk_live_GNJmepMRYWVVaK8ADlqd3PsM';

// Stripe.setPublishableKey(publicStripeApiKey);

// function stripeResponseHandler (status, response) {
//   if (response.error) {
//     $('#error').text(response.error.message);
//     $('#error').slideDown(300);
//     $('#stripe-form .submit-button').removeAttr("disabled");
//     return;
//   }
  
//   var form = $("#payment-form");
//   form.append("<input type='hidden' name='stripeToken' value='" + response.id + "'/>");

//   $.post(
//     form.attr('action'),
//     form.serialize(),
//     function (status) {
//       if (status != 'ok') {
//         $('#error').text(status);
//         $('#error').slideDown(300);
//       }
//       else {
//         $('#error').hide();
//         $('#success').slideDown(300);
//       }
//       $('.submit-button').removeAttr("disabled");
//     }
//   );
// }

// // http://stripe.com/docs/tutorials/forms
// $("#payment-form").submit(function(event) {
//   $('#error').hide();
//   // disable the submit button to prevent repeated clicks
//   $('.submit-button').attr("disabled", "disabled");

//   var amount = $('#cc-amount').val(); // amount you want to charge in cents
//   Stripe.createToken({
//     number: $('.card-number').val(),
//     cvc: $('.card-cvc').val(),
//     exp_month: $('.card-expiry-month').val(),
//     exp_year: $('.card-expiry-year').val()
//   }, amount, stripeResponseHandler);

//   // prevent the form from submitting with the default action
//   return false;
// });

/////////////////////////STRIPE END





var productPage = function() {
     console.log('product clicked');
     $('#page-table').empty();
       
        App.products = new App.Collections.Products();
         
        App.ProductsView = new App.Views.ProductsView({
            collection: App.products
        })

        App.products.fetch({
            reset: true
        });

    };


var antioxidantPage = function() {
     console.log('antioxidant clicked');
     $('#page-table').empty();
       
        // App.antioxidant = new App.Models.Category({id: 1});
        App.antioxidants = new App.Collections.Categories();

        App.AntioxidantView = new App.Views.AntioxidantView({collection: App.antioxidants});
        
        App.antioxidants.fetch({
            reset: true
        });

    };

var sunscreenPage = function() {
     console.log('sunscreen clicked');
     $('#page-table').empty();
        
        // App.sunscreen = Backbone.Collection.extend({url: '/categoriesprod/1'});
       App.sunscreens = new App.Collections.Sunscreens();

        App.SunscreenView = new App.Views.SunscreenView({collection: App.sunscreens});
        
        App.sunscreens.fetch({
            reset: true
        });

    };

var moisturizerPage = function() {
     console.log('moisturizer clicked');
     $('#page-table').empty();
       
        App.moisturizer = new App.Collections.Moisturizers();

        App.MoisturizerView = new App.Views.MoisturizerView({collection: App.moisturizer});
        
        App.moisturizer.fetch({
            reset: true
        });

    };

var cleanserPage = function() {
     console.log('cleanser clicked');
     $('#page-table').empty();
       
        App.cleanser = new App.Collections.Cleansers();

        App.CleanserView = new App.Views.CleanserView({collection: App.cleanser});
        
        App.cleanser.fetch({
            reset: true
        });

    };

    


var companyPage = function() {
     console.log('company clicked');
     $('#page-table').empty();
     var template = Handlebars.compile($('#company-template').html());
     $('#page').empty();
     $('#page').append(template);
};

var homePage = function() {
     console.log('home clicked');
     $('#page-table').empty();
     var template = Handlebars.compile($('#home-template').html());
     $('#page').empty();
     $('#page').append(template);
};



var chatPage = function() {
     console.log('chat clicked');
     var template = Handlebars.compile($('#chat-template').html());
     $("#msgBox").empty();
     $("#msg").empty();
     $('#page-container').prepend(template);
     $('#close-chat').click(closeChatPage);
     var unk = 'Anonymous';
     var name,
            socket = io.connect("http://localhost:3000");
        // $(function () {
            //as the user to enter their nick name or name.
            
            name = window.prompt("enter your name");
            // If the name is not given, ask the user to enter once again
            if (name == null) {
               
                //send to the server with person name and message
                name = window.prompt("enter your name");
               
            }
            //When send button is clicked on, send the message to server
            $("#send").click(function () {
                //send to the server with person name and message
                socket.emit("clientMsg", {
                    "name": name,
                    "msg": $("#msg").val()
                });
            });

            //After sending message to the server, we'll have to wire up the event for it.
            //We can do the following. Upon recievin the message print it to the message box
            //that we've created in our html
            socket.on("serverMsg", function (data) {
                //Append the message from the server to the message box
                $("#msgBox").append("<strong>" + data.name + "</strong>: " + data.msg + "<br/>");
            });

            $("#msg").on("keyup", function (event) {
                socket.emit("sender", {
                    name: name
                });
            });

            socket.on("sender", function (data) {
                $("#status").html(data.name + " is typing");
                setTimeout(function () {
                    $("#status").html('');
                }, 3000);
            });
        // });
};



var closeChatPage = function() {
     console.log('chat close clicked');
     
    $('#chat-popup').remove();
    // $('#chat').undelegateEvents();
    // socket.stopListening();
    // socket.on(stopListening());
};


var skinPage = function() {
     console.log('skin clicked');
      // $('#autocomplete').keyup(geoAutocomplete);
     $('#page-table').empty();
     var template = Handlebars.compile($('#skin-template').html());
     $('#page').empty();
     $('#page').append(template);


     // $('#page-table').empty();
     // var template = Handlebars.compile($('#google-template').html());
     // $('#page').empty();
     // $('#page').append(template);

//      var map;
// var infowindow;

// function initMap() {
//   var pyrmont = {lat: -33.867, lng: 151.195};

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: pyrmont,
//     zoom: 15
//   });

//   infowindow = new google.maps.InfoWindow();

//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch({
//     location: pyrmont,
//     radius: 500,
//     types: ['store']
//   }, callback);
// }

// function callback(results, status) {
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//   }
// }

// function createMarker(place) {
//   var placeLoc = place.geometry.location;
//   var marker = new google.maps.Marker({
//     map: map,
//     position: place.geometry.location
//   });

//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.setContent(place.name);
//     infowindow.open(map, this);
//   });
// }
};

var sciencePage = function() {
     console.log('science clicked');
     
     $('#page-table').empty();
     var template = Handlebars.compile($('#science-template').html());
     $('#page').empty();
     $('#page').append(template);

     
    };


var counter = 0;









