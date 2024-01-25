const query = require('../DB/db-config');

module.exports = class TeamModel {
  async getAllTeams() {
    const sql = 'SELECT * FROM teams';
    const inputs = [];
    try {
      const teams = await query(sql, inputs);
      return teams.rows;
    } catch (error) {
      throw error.stack;
    }
  }
  async getAllFinalRankings() {
    const sql = 'SELECT * FROM team_final_rankings';
    const inputs = [];
    try {
      const rankings = await query(sql, inputs);
      return rankings.rows;
    } catch (error) {
      throw error.stack;
    }
  }
  async getFinalRankingsById(teamId) {
    const sql = 'SELECT * FROM team_final_rankings WHERE team_id = $1';
    const inputs = [teamId];
    try {
      const rankings = await query(sql, inputs);
      return rankings.rows;
    } catch (error) {
      throw error.stack;
    }
  }
  async getTeamBio(teamId) {
    const sql = `SELECT teams.id, CONCAT(teams.city, ' ', teams.name) AS teamName, stadiums.name AS stadiumName, 
        CONCAT(stadiums.city, ' ', stadiums.state) AS stadiumLocation, stadiums.capacity
        FROM teams JOIN stadiums ON teams.stadium_id = stadiums.id WHERE teams.id = $1;`;
    const inputs = [teamId];
    try {
      const bio = await query(sql, inputs);
      return bio.rows[0];
    } catch (error) {
      throw error.stack;
    }
  }
  async getTeamRoster(teamId) {
    const sql = `SELECT *
    FROM (
        SELECT name, id, team_id, pos, CAST(ROW_NUMBER() OVER (ORDER BY SUM(ppr) DESC) AS int) AS Rank, CAST(sum(PPR) AS int) AS total, CAST(ROUND(AVG(ppr), 2) AS int) AS ptsG
        FROM players
        JOIN fantasy_weeks
        ON id = player_id
        WHERE pos = 'QB'
        GROUP BY id, team_id, pos
        UNION
        SELECT name, id, team_id, pos, CAST(ROW_NUMBER() OVER (ORDER BY SUM(ppr) DESC) AS int) AS Rank, CAST(sum(PPR) AS int) AS total, CAST(ROUND(AVG(ppr), 2) AS int) AS ptsG
        FROM players
        JOIN fantasy_weeks
        ON id = player_id
        WHERE pos = 'RB'
        GROUP BY id, team_id, pos
        UNION
        SELECT name, id, team_id, pos, CAST(ROW_NUMBER() OVER (ORDER BY SUM(ppr) DESC) AS int) AS Rank, CAST(sum(PPR) AS int) AS total, CAST(ROUND(AVG(ppr), 2) AS int) AS ptsG
        FROM players
        JOIN fantasy_weeks
        ON id = player_id
        WHERE pos = 'WR'
        GROUP BY id, team_id, pos
        UNION
        SELECT name, id, team_id, pos, CAST(ROW_NUMBER() OVER (ORDER BY SUM(ppr) DESC) AS int) AS Rank, CAST(sum(PPR) AS int) AS total, CAST(ROUND(AVG(ppr), 2) AS int) AS ptsG
        FROM players
        JOIN fantasy_weeks
        ON id = player_id
        WHERE pos = 'TE'
        GROUP BY id, team_id, pos 
    )sub
    WHERE team_id = $1
    ORDER BY team_id, pos, rank;`;
    const inputs = [teamId];
    try {
      const roster = await query(sql, inputs);
      return roster.rows;
    } catch (error) {
      throw error.stack;
    }
  }
};
