const express = require('express');
const router = express.Router();
const auth = require("../controller/auth.controller")
router.post('/signup', auth.signup)
router.post('/login', auth.login)

const middelware = require("../middleware/vailidation.middleware")
router.get('/user', middelware.middleware1, middelware.middleware2, (req, res) => {
    console.log("req", req.query);
    res.send('Hello World!')
})
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