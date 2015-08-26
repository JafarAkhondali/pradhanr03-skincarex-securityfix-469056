var root = __dirname;
var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var bcrypt = require('bcrypt');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var path = require('path');
var db = require('./db.js');
var router = express.Router();
// var key = 'edited out for now';
// var sendgrid = require('sendgrid')(key);


// app.listen(3000);

app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), function () {
  console.log("App running on port : ", app.get('port'));
});

app.engine('handlebars', exphbs({defaultLayout: 'main', extname: 'handlebars'}));
app.set('views', path.join(root, 'views'));
app.set('view engine', 'handlebars');


app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'allthethings',
  saveUninitialized: false,
  resave: false
}));



app.use(methodOverride(function(req, res) {
 if (req.body && typeof req.body === 'object' && '_method' in req.body) {
   // look in urlencoded POST bodies and delete it
   var method = req.body._method
   delete req.body._method
   return method
 }
}));



fs.readdirSync('./controllers').forEach(function (file) {
 if(file.substr(-3) == '.js') {
     route = require('./controllers/' + file);
     console.log('this is the route', route);
     route.controller(app, session);
 };
});


////////////STRIPE






var stripeApiKey = "sk_test_ib1OUfArOxFZnzYzcDtJVG8g";
var stripeApiKeyTesting = "pk_test_MXr2MlrwCRK0zPtvNooCrHba";
var stripe = require('stripe')(stripeApiKey);

// app = express.createServer(express.bodyDecoder);

app.post("/test", function(req, res) {

    stripe.charges.create({
      amount: 400,
      currency: "usd",
      card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2014,
        cvc: '123'
      },
      description: "Charge for test@example.com"
    }).then(function(charge) {
      console.log("Charge created");
      console.log(charge);
    }, function(err) {
      console.log(err);
    });
  
  // stripe.customers.create({
  //   card : req.body.stripeToken,
  //   email : "ruby@ruby.com", // customer's email (get it from db or session)
  //   plan : "test"
  // }, function (err, customer) {
  //   if (err) {
  //     var msg = customer.error.message || "unknown";
  //     res.send("Error while processing your payment: " + msg;
  //   }
  //   else {
  //     var id = customer.id;
  //     console.log('Success! Customer with Stripe ID ' + id + ' just signed up!');
  //     // save this customer to your database here!
  //     res.send('ok');
  //   }
  // });
});

//ROOT ROUTE
