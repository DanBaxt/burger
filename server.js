var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3030;

var app = express();

app.use(express.static(process.cwd() + '/public'));
// app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);


var port = process.env.PORT || 3000;
console.log("You are connected at localhost: " + 3000)
app.listen(port);