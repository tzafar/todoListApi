const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let database_connection_string = 'mongodb://localhost:27017/books-api';
mongoose.connect(database_connection_string, {useNewUrlParser: true, useUnifiedTopology: true});

const express_app = express();
const bodyParser = require('body-parser');
express_app.use(bodyParser.urlencoded({extended: true}));
express_app.use(bodyParser.json());

let routes_file = './api/routes/bookRoutes';
const routes = require(routes_file); //importing route
routes(express_app); //register the route

module.exports = express_app