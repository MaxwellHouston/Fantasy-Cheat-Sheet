const query = require('../DB/db-config');

module.exports = class UserModel {
  async getUserByEmail(email) {
    const sql = `SELECT * FROM user_account WHERE email = $1;`;
    const inputs = [email];
    try {
      const user = await query(sql, inputs);
      return user.rows[0];
    } catch (error) {
      throw error.stack;
    }
  }
  async getUserById(id) {
    const sql = `SELECT * FROM user_account WHERE id = $1;`;
    const inputs = [id];
    try {
      const user = await query(sql, inputs);
      return user.rows[0];
    } catch (error) {
      throw error.stack;
    }
  }
  async createUser({ id, email, password, name }) {
    const sql =
      'INSERT INTO user_account (id, email, password, name) VALUES ($1, $2, $3, $4) RETURNING *;';
    const inputs = [id, email, password, name];
    try {
      const newUser = await query(sql, inputs);
      return newUser.rows[0];
    } catch (error) {
      throw error.stack;
    }
  }
};
