const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
function UserModel(sequelize) {
    const User = sequelize.define('users', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: {
            type: DataTypes.STRING,
            default: "test",
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Phone number invalid."
                }
            }
        },
        password: DataTypes.STRING,
        // user_type_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user_types',
        //         key: 'user_type_id',
        //     }
        // }
    }, {});
    User.associate = function (models) {
        // this.User = this.belongsTo(models.user_types, { foreignKey: 'user_type_id' });
    };
    User.beforeSave(async (user, options) => {

        if (user.changed('password')) {

            bcrypt.genSalt(10)
                .then((salt) => {
                    console.log("err, salt", salt)
                    return bcrypt.hash(user.password, salt)
                })
                .then((hash) => {
                    console.log("hashed", hash)
                    user.password = hash;
                });
        }
    });

    User.prototype.comparePassword = async function (pw) {

        if (!this.password) throwErr('password not set');

        bcrypt.compare(pw, this.password).then((err, pass) => {
            if (err) throwErr(err);
            if (!pass) throwErr('invalid password');
        });
        return this;

    }

    User.prototype.getJWT = function () {
         
        return "Bearer " + jwt.sign({
            userId: this.userId
        }, "defaulyjwtencry", {
            expiresIn: '365d'
        });
    };
    return User
}

module.exports = UserModel
