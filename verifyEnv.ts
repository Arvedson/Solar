const { config } = require('dotenv');

config();

console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DATABASE_URL_PRODUCTION:', process.env.DATABASE_URL_PRODUCTION);
console.log('DATABASE_URL_DEVELOPMENT:', process.env.DATABASE_URL_DEVELOPMENT);
