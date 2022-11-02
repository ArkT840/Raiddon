const express = require ('express');
const router = express.Router();

//Register route
router.post('/register', async (req, res, next) => {
    res.send("register route")
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