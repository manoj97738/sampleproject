const express = require('express');
const app = express()
var bodyParser = require('body-parser');
const initApp = require("./www/app")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// (req,res,next)
// REST G - get P-post P-patch  P- put D- delete
// Representational state transfer
const routePublic = require("./routes/route.public");
app.use("/v1", routePublic);
app.all('**', (req, res) => {
    res.send('No route found')
})
initApp(app);
