const express = require ('express');
const axios = require("axios");
const fetch = require('node-fetch');
require('dotenv').config();

const { CLIENT_ID, CLIENT_SECRET } = process.env;

const base = "https://us.battle.net";

const app = express();

// test route
app.get("/test", async (req, res) => {
  const data = await generateAccessTokenFetch();
  console.log(data);
  res.json(data);
});

// axios version
async function generateAccessToken() {
  const response = await axios({
    url: base + "/v1/oauth2/token",
    method: "post",
    data: "grant_type=client_credentials",
    auth: {
      username: CLIENT_ID,
      password: CLIENT_SECRET,
    },
  });
  return response.data;
}

app.listen(3000);


// //Dependencies
// const express = require ('express');
// const raiddon = express();
// const mongoose = require('mongoose');
// require('dotenv').config();
// const axios = require("axios");
// const fetch = require('node-fetch');


// // Mongodb connection via mongoose
// mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
// console.log('Connected to DB successfully')
// );

// fetch('https://us.api.blizzard.com/data/wow/power-type/index?namespace=static-classic-us&locale=en_US&access_token=EUjvc1y4p1Q7MLYNxKxZP1ptdTDiZQ5EQ0')
//     .then(res => res.text())
//     .then(text => console.log(text));
// //Routes
// raiddon.get('/', (req,res) => {
//     res.send('Raiddon home')
// });

// module.exports = async () => {
//     await oauthClient.getToken();
//     return raiddon;
//   };

// //localhost listening
// raiddon.listen(3000);