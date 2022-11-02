const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const AuthRoute = require('./Routes/Auth.route');
const csp = require('express-csp-header');


require('dotenv').config();

const app = express();
app.use(morgan('dev'))

//Generating HomePage
app.get('/', async (req, res, next) => {
    res.send("Hello from express.")
})

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
const router = express.Router();
//Register route
router.post('/register', async (req, res, next) => {
    res.send("register route")
})

//Middleware for auth pages
app.use('/auth', AuthRoute)

//Listening port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})