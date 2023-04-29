const path = require('path')
const express = require('express');
const app = express()
var bodyParser = require('body-parser');
const initApp = require("./www/app")
const middelware = require("./middleware/vailidation.middleware")
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use("/static", express.static('public'))
app.use("/report", express.static('report'));
app.use(middelware.middleware1);
app.use(middelware.middleware2);
// (req,res,next)
// REST G - get P-post P-patch  P- put D- delete
// Representational state transfer
const routePublic = require("./routes/route.public");

app.get('/filedownlaod', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'angularsyllabus.pdf'))
})
app.use("/v1", routePublic);
app.all('**', (req, res) => {
    res.send('No route found')
})
initApp(app);

const modelaggreement = require("./model/agreement.model")
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('apnaadda', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
(async () => {
    try {
        await sequelize.authenticate();
        const aggrement = modelaggreement(sequelize);
        await sequelize.sync();
        const jane = await aggrement.create({ firstName: "Jane", lastName: "Doe" });
        console.log("jane", jane.toJSON())
        const janexy = await aggrement.findAll({});
        console.log("janexy", janexy)
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()
