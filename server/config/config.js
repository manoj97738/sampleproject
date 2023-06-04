require('dotenv').config();

let CONFIG = {}

CONFIG.app = process.env.APP || 'dev';

CONFIG.port = process.env.PORT || '5130';
CONFIG.db_dialect = process.env.DB_DIALECT || 'mysql';
CONFIG.db_host = process.env.DB_HOST || 'localhost';
CONFIG.db_port = process.env.DB_PORT || '3306';
CONFIG.db_name = process.env.DB_NAME || 'apnaadda';
CONFIG.db_user = process.env.DB_USER || 'root';
CONFIG.db_password = process.env.DB_PASSWORD || '';
CONFIG.jwt_encryption = process.env.jwt_encryption || 'defaulyjwtencry';

module.exports = CONFIG;
