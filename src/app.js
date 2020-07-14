'use strict'; // ajuda o slint a checar erros

const express = require('express');
const bodyParser = require('body-parser');
const monggose = require('mongoose');

const app = express();

// Carrega os Models
const Lead = require('./models/lead-model');

// Carrega as Rotas
const indexRoute = require('./routes/index-route');
const leadRoute = require('./routes/lead-route');

// converter o body com o bodyParser
app.use(bodyParser.json({
    limit: '10mb'
}));
// codifica a url
app.use(bodyParser.urlencoded({ extended: false }));

// Habilita o CORS
app.use(function(req, res, next){
    res.header('Access-control-Allow-Origin', '*');
    res.header(
        'Access-control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header(
        'Access-control-Allow-Methods', 
        'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', indexRoute);
app.use('/create', leadRoute);

module.exports = app;
