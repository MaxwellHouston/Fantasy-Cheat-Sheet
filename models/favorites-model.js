const query = require('../DB/db-config');

module.exports = class FavoritesModel {
  async getFavorites(userId) {
    const sql = `SELECT * 
        FROM player_stats
        JOIN player_bio
        ON player_stats.id = player_bio.id
        WHERE player_stats.id IN (
          SELECT player_id
           FROM user_players
           WHERE user_id = $1
        );`;
    const inputs = [userId];
    try {
      const favorites = await query(sql, inputs);
      return favorites.rows;
    } catch (error) {
      throw error.stack;
    }
  }
  async addFavorite(userId, playerId) {
    const sql =
      'INSERT INTO user_players (user_id, player_id) VALUES ($1, $2) RETURNING *;';
    const inputs = [userId, playerId];
    try {
      const newFavorite = await query(sql, inputs);
      return newFavorite.rows[0];
    } catch (error) {
      throw error.stack;
    }
  }
  async removeFavorite(userId, playerId) {
    const sql =
      'DELETE FROM user_players WHERE user_id = $1 AND player_id = $2;';
    const inputs = [userId, playerId];
    try {
      const { rowCount } = await query(sql, inputs);
      return rowCount > 0;
    } catch (error) {
      throw error.stack;
    }
  }
};
