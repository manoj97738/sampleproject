const { Sequelize, DataTypes } = require('sequelize');

function Model(sequelize) {
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
    }, {
        // Other model options go here
    });

    return User
}

module.exports = Model
