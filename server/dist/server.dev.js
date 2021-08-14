"use strict";

require('dotenv').config({
  path: "./.env"
});

var express = require('express');

var cors = require('cors');

var app = express();
var port = 8000;
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));

var cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

require('./config/productmanager.config');

require('./routes/productmanager.routes')(app);

require('../user.routes')(app);

app.listen(process.env.MY_PORT, function () {
  return console.log("Listening on port: ".concat(process.env.MY_PORT));
});