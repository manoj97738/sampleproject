const { Sequelize, DataTypes } = require('sequelize');

function UserModel(sequelize) {
    const User = sequelize.define('users', {
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
        },
        user_type_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user_types',
                key: 'user_type_id',
            }
        }
    }, {});
    User.associate = function (models) {
        this.User = this.belongsTo(models.user_types, { foreignKey: 'user_type_id' });
    };
    return User
}

module.exports = UserModel
