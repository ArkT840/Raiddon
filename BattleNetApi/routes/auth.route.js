const express = require ('express');
const router = express.Router();
const createError = require('http-errors')

//Register route
router.post('/register', async (req, res, next) => {
    try{
        const { email, password } = req.body
        if(!email || !password ) throw createError.BadRequest()
    } catch (error){
        next(error)
    }
})

//Login route
router.post('/login', async (req, res, next) => {
    res.send("login route")
})

//Refresh token route
router.post('/refresh-token', async (req, res, next) => {
    res.send("refresh-token route")
})

//Logout route
router.delete('/logout', async (req, res, next) => {
    res.send("logout route")
})

module.exports = router