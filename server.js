var root = __dirname;
var express = require('express');
var http = require('http');
var fs = require('fs');
var sanitize = require('validator').sanitize;
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




//sockets!
var http = require('http').Server(app);
var io = require('socket.io')(http);




app.set('port', (process.env.PORT || 3000));


///added this for sockets
http.listen(app.get('port'), function() {
    console.log("io app is running at localhost:" + app.get('port'));
})



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


io.sockets.on('connection', function (socket) {
    //when recieving the data from the server, push the same message to client.
    socket.on("clientMsg", function (data) {
        //send the data to the current client requested/sent.
        socket.emit("serverMsg", data);
        //send the data to all the clients who are acessing the same site(localhost)
        socket.broadcast.emit("serverMsg", data);
    });

    socket.on("sender", function (data) {
        socket.emit("sender", data);
        socket.broadcast.emit("sender", data);
    });
});



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






// var stripeApiKey = "sk_test_ib1OUfArOxFZnzYzcDtJVG8g";
// var stripeApiKeyTesting = "pk_test_MXr2MlrwCRK0zPtvNooCrHba";
// var stripe = require('stripe')(stripeApiKey);

// // app = express.createServer(express.bodyDecoder);

// app.post("/test", function(req, res) {

//     stripe.charges.create({
//       amount: 400,
//       currency: "usd",
//       card: {
//         number: '4242424242424242',
//         exp_month: 12,
//         exp_year: 2014,
//         cvc: '123'
//       },
//       description: "Charge for test@example.com"
//     }).then(function(charge) {
//       console.log("Charge created");
//       console.log(charge);
//     }, function(err) {
//       console.log(err);
//     });

//   // stripe.customers.create({
//   //   card : req.body.stripeToken,
//   //   email : "ruby@ruby.com", // customer's email (get it from db or session)
//   //   plan : "test"
//   // }, function (err, customer) {
//   //   if (err) {
//   //     var msg = customer.error.message || "unknown";
//   //     res.send("Error while processing your payment: " + msg;
//   //   }
//   //   else {
//   //     var id = customer.id;
//   //     console.log('Success! Customer with Stripe ID ' + id + ' just signed up!');
//   //     // save this customer to your database here!
//   //     res.send('ok');
//   //   }
//   // });
// });

// //ROOT ROUTE
