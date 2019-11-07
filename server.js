var express = require('express');
var mongoose = require('mongoose');

var express_app = express();
var on_port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
let database_connection_string = 'mongodb://54.202.103.114/Tododb';
let routes_file = './api/routes/todoListRoutes';
let model_file = './api/models/todoListModel';

Task = require(model_file); //created model loading here
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect(database_connection_string, {useNewUrlParser: true, useUnifiedTopology: true});

express_app.use(bodyParser.urlencoded({extended: true}));
express_app.use(bodyParser.json());

var routes = require(routes_file); //importing route
routes(express_app); //register the route

express_app.listen(on_port);

console.log('todo list RESTful API server started on: ' + on_port);
