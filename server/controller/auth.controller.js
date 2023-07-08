
const { users } = require("../model");
module.exports.signup = async function (req, res) {

    users.findAll({
        where: {
            email: req.body.email
        }
    }).then((err, userRef) => {
        console.log("err,data", err, userRef);
        return users.create(req.body)
    }).then((err, data) => {
        res.send("success")
    })
}
module.exports.login = async function (req, res) {
    console.log(req.body)
    users.findOne({
        where: {
            email: req.body.email
        }
    }).then((userRef, err) => {
        console.log("sdasdsd", err, userRef)
        if (userRef.toJSON().password == req.body.password) {
            res.json({
                data: userRef.toJSON(),
                token: userRef.getJWT()
            })
        }
    })
}

