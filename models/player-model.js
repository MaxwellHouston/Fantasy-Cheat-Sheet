const query = require('../DB/db-config');

module.exports = class PlayerModel {
  async getPlayerPosition(playerId) {
    const sql = 'SELECT pos FROM players WHERE id = $1';
    const inputs = [playerId];
    try {
      const position = await query(sql, inputs);
      return position.rows[0];
    } catch (error) {
      throw error.stack;
    }
  }
  async getAllPlayers() {
    const sql = 'SELECT * FROM player_stats';
    const inputs = [];
    try {
      const players = await query(sql, inputs);
      return players.rows;
    } catch (error) {
      throw error.stack;
    }
  }
  async getPlayerBio(playerId) {
    const sql = 'SELECT * FROM player_bio WHERE id = $1;';
    const inputs = [playerId];
    try {
      const bio = await query(sql, inputs);
      return bio.rows[0];
    } catch (error) {
      throw error.stack;
    }
  }
  async getPlayerTotals(playerId) {
    const sql = `SELECT 
        id,
        '2021' as Season,
        (SELECT CAST(Rank AS int)
            FROM(
                SELECT id, ROW_NUMBER() OVER (ORDER BY SUM(ppr) DESC)as Rank
                FROM players
                JOIN fantasy_weeks
                ON players.id = fantasy_weeks.player_id
                WHERE pos = $2
                GROUP BY id
            )a
        WHERE id = $1) AS Rank, 
        CAST(sum(PPR) AS int) AS total, 
        CAST(ROUND(AVG(ppr), 2) AS int) AS ptsG,
        CAST(SUM(passing_weeks.att) AS int) AS passing_Att,
        CAST(SUM(passing_weeks.cmp) AS int) AS passing_Cmp,
        CAST(SUM(passing_weeks.yds) AS int) AS passing_Yards,
        CAST(SUM(passing_weeks.td) AS int) AS passing_Tds,
        CAST(SUM(passing_weeks.int) AS int) AS passing_Int,
        CAST(SUM(rushing_weeks.att) AS int) AS rushing_Att,
        CAST(SUM(rushing_weeks.yds) AS int) AS rushing_Yards,
        CAST(SUM(rushing_weeks.td) AS int) AS rushing_Tds,
        CAST(SUM(receiving_weeks.tgt) AS int) AS receiving_Tgt,
        CAST(SUM(receiving_weeks.rec) AS int) AS receiving_Rec,
        CAST(SUM(receiving_weeks.yds) AS int) AS receiving_Yards,
        CAST(SUM(receiving_weeks.td) AS int) AS receiving_Tds
        FROM players
        JOIN fantasy_weeks
        ON players.id = fantasy_weeks.player_id
        LEFT JOIN passing_weeks
        ON passing_weeks.player_id = players.id AND passing_weeks.week = fantasy_weeks.week
        LEFT JOIN rushing_weeks
        ON rushing_weeks.player_id = players.id AND rushing_weeks.week = fantasy_weeks.week
        LEFT JOIN receiving_weeks
        ON receiving_weeks.player_id = players.id AND receiving_weeks.week = fantasy_weeks.week
        WHERE id = $1
        GROUP BY id, pos;`;
    try {
      const position = await this.getPlayerPosition(playerId);
      const seasonTotals = await query(sql, [playerId, position.pos]);
      return seasonTotals.rows;
    } catch (error) {
      throw error.stack;
    }
  }
  async getWeeklyTotals(playerId) {
    const sql = `SELECT
      a.player_id,
      a.week,
      CAST(rank AS int),
      CAST(ppr AS int),
      CAST(stand AS int) as Standard,
      passing_Att,
      passing_Cmp,
      passing_Yards,
      passing_Tds,
      passing_Int,
      rushing_Att,
      rushing_Yards,
      rushing_Tds,
      receiving_Tgt,
      receiving_Rec,
      receiving_Yards,
      receiving_Tds
      FROM (
          SELECT player_id, week, ppr, stand, ROW_NUMBER() OVER(ORDER BY ppr DESC)as rank
          FROM fantasy_weeks
          JOIN players ON id = fantasy_weeks.player_id
          WHERE pos = $2 AND week = $3
          ORDER BY ppr DESC
      )a
      JOIN (
          SELECT
            fantasy_weeks.week,
            (passing_weeks.att) AS passing_Att,
            (passing_weeks.cmp) AS passing_Cmp,
            (passing_weeks.yds) AS passing_Yards,
            (passing_weeks.td) AS passing_Tds,
            (passing_weeks.int) AS passing_Int,
            (rushing_weeks.att) AS rushing_Att,
            (rushing_weeks.yds) AS rushing_Yards,
            (rushing_weeks.td) AS rushing_Tds,
            (receiving_weeks.tgt) AS receiving_Tgt,
            (receiving_weeks.rec) AS receiving_Rec,
            (receiving_weeks.yds) AS receiving_Yards,
            (receiving_weeks.td) AS receiving_Tds
          FROM players
          JOIN fantasy_weeks
          ON players.id = fantasy_weeks.player_id
          LEFT JOIN passing_weeks
          ON passing_weeks.player_id = players.id AND passing_weeks.week = fantasy_weeks.week
          LEFT JOIN rushing_weeks
          ON rushing_weeks.player_id = players.id AND rushing_weeks.week = fantasy_weeks.week
          LEFT JOIN receiving_weeks
          ON receiving_weeks.player_id = players.id AND receiving_weeks.week = fantasy_weeks.week
          WHERE id = $1 AND fantasy_weeks.week = $3
          ORDER BY fantasy_weeks.week
      )b
      ON a.week = b.week
      WHERE player_id = $1;`;
    const weeklyStats = [];
    try {
      const position = await this.getPlayerPosition(playerId);
      for (let i = 1; i <= 18; i++) {
        const week = await query(sql, [playerId, position.pos, i]);
        if (week.rows[0]) {
          weeklyStats.push(week.rows[0]);
        } else {
          weeklyStats.push({
            player_id: Number(playerId),
            week: i,
            rank: null,
            ppr: null,
            standard: null,
            passing_att: null,
            passing_cmp: null,
            passing_yards: null,
            passing_tds: null,
            passing_int: null,
            rushing_att: null,
            rushing_yards: null,
            rushing_tds: null,
            receiving_tgt: null,
            receiving_rec: null,
            receiving_yards: null,
            receiving_tds: null,
          });
        }
      }
      return weeklyStats;
    } catch (error) {
      throw error.stack;
    }
  }
};
