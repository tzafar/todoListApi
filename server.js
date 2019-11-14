var express = require('express');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let database_connection_string = 'mongodb://34.222.58.218/Tododb';
mongoose.connect(database_connection_string, {useNewUrlParser: true, useUnifiedTopology: true});

var express_app = express();
var bodyParser = require('body-parser');
express_app.use(bodyParser.urlencoded({extended: true}));
express_app.use(bodyParser.json());

let routes_file = './api/routes/bookRoutes';
var routes = require(routes_file); //importing route
routes(express_app); //register the route

var on_port = process.env.PORT || 3000;
express_app.listen(on_port);

module.exports = express_app

console.log('todo list RESTful API server started on: ' + on_port);
