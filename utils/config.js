require('dotenv').config();

module.exports = {
  PORT: process.env.PORT,

  dbLogin: {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  },

  sessionSecret: process.env.SESSION_SECRET,
};
