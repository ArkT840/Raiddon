const express = require ('express');
const raiddon = express();
const mongoose = require('mongoose');
require('dotenv').config();
const axios = require("axios");
const fetch = require('node-fetch');

// Conncection à la bdd mongodb, via mongoose
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
console.log('Connected to DB successfully')
);

console.log(fetch('https://us.api.blizzard.com/data/wow/playable-race/2?namespace=static-classic-us&locale=en_US&access_token=EUl6XwzE6x2B88Gq2hS5ZYRWdFGZex3x5o'));

//Routes
raiddon.get('/', (req,res) => {
    res.send('Raiddon home')
});

raiddon.listen(3000);