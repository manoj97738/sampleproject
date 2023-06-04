const path = require('path')
const express = require('express');
const app = express()
const passport = require('passport');
var bodyParser = require('body-parser');
const initApp = require("./www/app")
const middelware = require("./middleware/vailidation.middleware")
const CONFIG = require("./config/config")
const models = require("./model");
models.sequelize.authenticate()
    .then(() => {
        console.log('Connected to SQL database:', CONFIG.db_name);
    })
    .catch(err => {
        console.error('Unable to connect to SQL database:', CONFIG.db_name, err);
    });
if (CONFIG.app === 'dev') {
    // models.sequelize.sync();//creates table if they do not already exist
    models.sequelize.sync({ force: true });//deletes all tables then recreates them useful for testing and development purposes
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(express.static('public'));
app.use("/static", express.static('public'))
app.use("/report", express.static('report'));
app.use(middelware.middleware1);
app.use(middelware.middleware2);
// (req,res,next)
// REST G - get P-post P-patch  P- put D- delete
// Representational state transfer
const routePublic = require("./routes/route.public");
const routeProtected = require("./routes/route.protected");

app.get('/filedownlaod', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'angularsyllabus.pdf'))
})
app.use("/v1", routePublic);
app.use(passport.authenticate('jwt', { session: false }));
app.use("/v1", routeProtected);

app.all('**', (req, res) => {
    res.send('No route found')
})


// models.users.findAll({
//     include: [
//         { model: models.user_types },
//     ]
// })
//     .then((err, data) => {
//         // console.log(data.toWeb())
//         console.log("err,data", err, data)
//     });
initApp(app);