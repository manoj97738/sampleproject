'use strict';

const path = require('path');
const db = {};
const Sequelize = require('sequelize');
const CONFIG = require('../config/config');

const sequelize = new Sequelize(CONFIG.db_name, CONFIG.db_user, CONFIG.db_password, {
    host: CONFIG.db_host,
    dialect: CONFIG.db_dialect,
    port: CONFIG.db_port,
    operatorsAliases: false
});

db["users"] = require("./user.model")(sequelize);


Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;