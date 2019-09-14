import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

var users = require('./routes/users')
var home = require('./routes/home')

// var wiki = require('./wiki.js');
// // ...

var app = express()

var mongoDB = "mongodb://localhost"

// mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.connect('mongodb://localhost');

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/**
    * Register the routes
    */

// routes(app);

// app.use('/wiki', wiki);
app.use('/users', users);
app.use('/', home);

export default app;
