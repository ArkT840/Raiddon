const express = require('express');
const createError = require('http-errors');
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 8080;
const app = express();


var corsOptions = {
    origin: "http://localhost:8081"
  };

/** Applying JSON indentation */
app.set('json spaces', 2);

//Connecting server to mongo
const db = require("./models/db_schemas");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


/** Starting server */
module.exports = (app) =>{
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/', require('./routes/bnet'))
    app.use('/', require('./routes/index'))
}

app.listen(port, () => {
    console.log(`RAIDDON listening on ${port}!`);
  });
  
  //Generating error page
  app.use(async (res, req, next) => {
    next(createError.NotFound())
  })
  app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.send({
        error: {
            status: err.status ||500,
            message: err.message
        }
    })
  })
  