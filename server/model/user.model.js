const { Sequelize, DataTypes } = require('sequelize');

function UserModel(sequelize) {
    const User = sequelize.define('Agreement', {
        agreementId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: {
            type: DataTypes.STRING,
            default: "test",
        }
    }, {});

    return User
}

module.exports = UserModel
