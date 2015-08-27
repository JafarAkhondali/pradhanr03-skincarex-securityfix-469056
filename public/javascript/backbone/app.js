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
    $('#checkout').click(cartPage);
    $('.products').click(productPage);
    $('.company').click(companyPage);
    $('#web').click(homePage);
    $('.skin').click(skinPage);
    $('.science').click(sciencePage);
    $('#chat').click(chatPage);


    
  });   


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

     var name,
            socket = io.connect("http://localhost:3000");
        $(function () {
            //as the user to enter their nick name or name.
            
            name = window.prompt("enter your name");
            //If the name is not given, ask the user to enter once again
            if (name == null) {
                $("body").html(" please refresh the page and try again ");
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
        });
};



var closeChatPage = function() {
     console.log('chat close clicked');
     
    $('#chat-popup').remove();
};


var skinPage = function() {
     console.log('skin clicked');
     // var template = Handlebars.compile($('#skin-template').html());
     // $('#page').empty();
     // $('#page').append(template);
     $('#page-table').empty();
     var template = Handlebars.compile($('#google-template').html());
     $('#page').empty();
     $('#page').append(template);

     var map;
var infowindow;

function initMap() {
  var pyrmont = {lat: -33.867, lng: 151.195};

  map = new google.maps.Map(document.getElementById('map'), {
    center: pyrmont,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: pyrmont,
    radius: 500,
    types: ['store']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}




       
    };

var sciencePage = function() {
     console.log('science clicked');
     
     $('#page-table').empty();
     var template = Handlebars.compile($('#science-template').html());
     $('#page').empty();
     $('#page').append(template);

     // var name,
     //        socket = io.connect("http://localhost:3000");
     //    $(function () {
     //        //as the user to enter their nick name or name.
            
     //        name = window.prompt("enter your name");
     //        //If the name is not given, ask the user to enter once again
     //        if (name == null) {
     //            $("body").html(" please refresh the page and try again ");
     //        }
     //        //When send button is clicked on, send the message to server
     //        $("#send").click(function () {
     //            //send to the server with person name and message
     //            socket.emit("clientMsg", {
     //                "name": name,
     //                "msg": $("#msg").val()
     //            });
     //        });

     //        //After sending message to the server, we'll have to wire up the event for it.
     //        //We can do the following. Upon recievin the message print it to the message box
     //        //that we've created in our html
     //        socket.on("serverMsg", function (data) {
     //            //Append the message from the server to the message box
     //            $("#msgBox").append("<strong>" + data.name + "</strong>: " + data.msg + "<br/>");
     //        });

     //        $("#msg").on("keyup", function (event) {
     //            socket.emit("sender", {
     //                name: name
     //            });
     //        });

     //        socket.on("sender", function (data) {
     //            $("#status").html(data.name + " is typing");
     //            setTimeout(function () {
     //                $("#status").html('');
     //            }, 3000);
     //        });
     //    });
       
    };


var counter = 0;

var cartPage = function() {
    console.log('cart page clicked');

    // -------templates required for the cart page--------
    var template = Handlebars.compile($('#cart-template').html());
    var template1 = Handlebars.compile($('#temp-cart').html());
    var template2 = Handlebars.compile($('#temp-cart-bottom').html());
    var template3 = Handlebars.compile($('#checkout-template').html());

     $('#page').empty();
     $('#page-table').empty();
     $('#page-table').append(template1()); //just appending a header template
    

    var cartObj =[];

    for (var key in sessionStorage) {  //iterating over sessionStorage object and 
        cartObj.push(JSON.parse(sessionStorage[key])); //pushing into empty array cartObj
    }

    var car = {     //Just inserting a cartObj in an obj , so we can pass an object into the template
        obj: cartObj
    }
         
         $('#page-table').append(template(car)); //appending the list of products objects template in the cart view
        
         
         var sum =0;
         for (var key in car.obj) {   //calculating the total price of the added products
            sum = sum+ car.obj[key].price;
         }

         var total = {  //just inserting the sum in an object, so we can pass it to a template
            sum: sum
         }
            
            localStorage.setItem("total_price", sum);
            localStorage.setItem("customer_id", user_id);

            $('#page-table').append(template2(total)); //appending the template that has total price on it
 
            $.ajax({          //ajax call to get the customer id from session to add it to the data-value of the checkout button
            url: '/sessions',
            type: 'GET',
            success: function(data) {
                var sessObj = {
                        id: data
                    }
                user_id = data
                 $('#page-table').append(template3(sessObj));
                
            },            
            fail: function(){
                var sessObj = {
                        id: null
                    }

                $('#page-table').append(template3(sessObj));
            }

        });
            console.log(App.orders);
            console.log(App.order);

            if (!App.order) {
          App.orders = new App.Collections.Orders();
            App.order = new App.Views.Order({collection: App.orders});      
        // App.order = new App.Views.Order();
        }
            
}








