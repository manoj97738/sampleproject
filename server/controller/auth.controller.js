
module.exports.signup = async function (body, res) {

    users.findAll({
        where: {
            [Op.or]: [
                { email: req.body.email }
            ]
        }
    }).then((err, userRef) => {
        console.log("err,data", err, userRef);
        return userRef.create(req.body)
    }).then((err, data) => {
        console.log("err,data", err, data);
    })
}
module.exports.login = async function (body, res) {

    users.findOne({
        where: {
            email: req.body.email
        }
    }).then((err, userRef) => {
        return userRef.comparePassword(req.body.password)
    }).then((err, data) => {
       
    })
}

