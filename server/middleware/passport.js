const { ExtractJwt, Strategy } = require('passport-jwt');
const { users } = require('../model');
const CONFIG = require('../config/config');

module.exports = function (passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = CONFIG.jwt_encryption;

    passport.use(new Strategy(opts, async function (jwt_payload, done) {
        let err, user;

        users.findByPk(jwt_payload.user_id).then((err, user) => {
            console.log(err, user)
        });

        if (err) return done(err, false);
        return done(null, user);
    }));
}
