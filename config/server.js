var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine','ejs');
app.set('views','./app/views');

consign()
    .include('app/router')
    .then('config/dbConnection.js')
    .then('app/models/noticiasModel.js')
    .into(app)
    // consign({cwd: 'app'})
    // .include('routes')
    // .then('models')
    // .then('controllers')
    // .then('config/dbConnection.js')
    // .into(app)
module.exports = app;