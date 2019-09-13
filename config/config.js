require('dotenv').config();//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3001';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_port      = process.env.DB_PORT       || '3306';
CONFIG.db_name      = process.env.DB_NAME       || 'just_venue';
CONFIG.db_user      = process.env.DB_USER       || 'root';
CONFIG.db_password  = process.env.DB_PASSWORD   || '';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'jwt_just_venue';
CONFIG.jwt_expiration  = process.env.JWT_EXPIRATION || '10000';

CONFIG.email_host  = process.env.EMAIL_HOST || '';
CONFIG.email_user  = process.env.EMAIL_USER || '';
CONFIG.email_pass  = process.env.EMAIL_PASS || '';
CONFIG.SEND_GRID_API_KEY  = process.env.SEND_GRID_API_KEY || '';
CONFIG.FROM_EMAIL  = process.env.FROM_EMAIL || 'fioriolorenzof@gmail.com';

module.exports = CONFIG;
