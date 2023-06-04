const express = require('express');
const router = express.Router();
const auth = require("../controller/auth.controller")
router.post('/signup', auth.signup)
router.post('/login', auth.login)




router.get('/user/:id', (req, res) => {
    console.log(req.params)
    res.send('get one request + ' + req.params.id)
})
router.post('/user', (req, res) => {
    console.log(req.body)
    res.send('Got a POST request')
})
router.put('/user', (req, res) => {
    res.send('Got a put request')
})
router.patch('/user', (req, res) => {
    res.send('Got a patch request')
})
router.delete('/user', (req, res) => {
    res.send('Got a patch request')
})

module.exports = router;