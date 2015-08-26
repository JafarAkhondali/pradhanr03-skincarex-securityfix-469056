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
    
    // $('.sign-in').click(signinPage);
    // $('.log-in').click(loginPage);
     

/////////////////////STRIPE START/////////////


var publicStripeApiKey = 'sk_live_2bIboKj22N3LV83wdNf6vigy';
var publicStripeApiKeyTesting = 'pk_live_GNJmepMRYWVVaK8ADlqd3PsM';

Stripe.setPublishableKey(publicStripeApiKey);

function stripeResponseHandler (status, response) {
  if (response.error) {
    $('#error').text(response.error.message);
    $('#error').slideDown(300);
    $('#stripe-form .submit-button').removeAttr("disabled");
    return;
  }
  
  var form = $("#payment-form");
  form.append("<input type='hidden' name='stripeToken' value='" + response.id + "'/>");

  $.post(
    form.attr('action'),
    form.serialize(),
    function (status) {
      if (status != 'ok') {
        $('#error').text(status);
        $('#error').slideDown(300);
      }
      else {
        $('#error').hide();
        $('#success').slideDown(300);
      }
      $('.submit-button').removeAttr("disabled");
    }
  );
}

// http://stripe.com/docs/tutorials/forms
$("#payment-form").submit(function(event) {
  $('#error').hide();
  // disable the submit button to prevent repeated clicks
  $('.submit-button').attr("disabled", "disabled");

  var amount = $('#cc-amount').val(); // amount you want to charge in cents
  Stripe.createToken({
    number: $('.card-number').val(),
    cvc: $('.card-cvc').val(),
    exp_month: $('.card-expiry-month').val(),
    exp_year: $('.card-expiry-year').val()
  }, amount, stripeResponseHandler);

  // prevent the form from submitting with the default action
  return false;
});

/////////////////////////STRIPE END

});



var productPage = function() {
     console.log('product clicked');

       
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
     var template = Handlebars.compile($('#company-template').html());
     $('#page').empty();
     $('#page').append(template);
       
    };

var homePage = function() {
     console.log('home clicked');
     var template = Handlebars.compile($('#home-template').html());
     $('#page').empty();
     $('#page').append(template);
       
    };

var skinPage = function() {
     console.log('skin clicked');
     var template = Handlebars.compile($('#skin-template').html());
     $('#page').empty();
     $('#page').append(template);
       
    };

var sciencePage = function() {
     console.log('science clicked');
     var template = Handlebars.compile($('#science-template').html());
     $('#page').empty();
     $('#page').append(template);
       
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
     $('#page').append(template1()); //just appending a header template
    

    var cartObj =[];

    for (var key in sessionStorage) {  //iterating over sessionStorage object and 
        cartObj.push(JSON.parse(sessionStorage[key])); //pushing into empty array cartObj
    }

    var car = {     //Just inserting a cartObj in an obj , so we can pass an object into the template
        obj: cartObj
    }
         
         $('#page').append(template(car)); //appending the list of products objects template in the cart view
        
         
         var sum =0;
         for (var key in car.obj) {   //calculating the total price of the added products
            sum = sum+ car.obj[key].price;
         }

         var total = {  //just inserting the sum in an object, so we can pass it to a template
            sum: sum
         }
            
            localStorage.setItem("total_price", sum);
            localStorage.setItem("customer_id", user_id);

            $('#page').append(template2(total)); //appending the template that has total price on it
 
            $.ajax({          //ajax call to get the customer id from session to add it to the data-value of the checkout button
            url: '/sessions',
            type: 'GET',
            success: function(data) {
                var sessObj = {
                        id: data
                    }
                user_id = data
                 $('#page').append(template3(sessObj));
                
            },            
            fail: function(){
                var sessObj = {
                        id: null
                    }

                $('#page').append(template3(sessObj));
            }

        });
            App.orders = new App.Collections.Orders();
            App.order = new App.Views.Order({collection: App.orders});
}








