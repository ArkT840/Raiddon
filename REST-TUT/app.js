const express = require('express');
const { Db } = require('mongodb');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
app.use(bodyParser.json());
//Import Routes
const postsRoute = require('./routes/posts');

//Middlewares: a function that executes when routes are being hit
app.use('/posts', postsRoute);



//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(
    process.nextTick.DB_CONNECTION,
    { userNewUrlParser: true},
     () => console.log('connected to Db!')
);

//Start listening to the server
app.listen(3000);
