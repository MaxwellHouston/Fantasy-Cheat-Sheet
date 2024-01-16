const { Pool } = require('pg');
const { dbLogin } = require('../config');

const localConfig = dbLogin;

const pool = new Pool(localConfig);

const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

module.exports = query;
