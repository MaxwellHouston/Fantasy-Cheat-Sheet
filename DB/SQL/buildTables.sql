/* Fill Players */
INSERT INTO players(name, pos)
SELECT sub.* 
FROM (
SELECT DISTINCT player, pos
FROM raw_qb_passing
UNION
SELECT DISTINCT player, pos
FROM raw_rb_rushing
UNION
SELECT DISTINCT player, pos
FROM raw_wr_receiving
UNION
SELECT DISTINCT player, pos
FROM raw_te_receiving
) sub;

/* Fill Games */
INSERT INTO games(week, home, away)
SELECT DISTINCT week, team, opp
FROM raw_wr_receiving
WHERE home IS NULL
ORDER BY week;

/* Fill Passing */
INSERT INTO passing_weeks(player_id,week,team_id,cmp,att,yds,td,int)
SELECT id,week,team,cmp,att,yds,td,int
FROM raw_qb_passing JOIN players ON players.name = raw_qb_passing.player
UNION
SELECT id,week,team,cmp,att,yds,td,int
FROM raw_rb_passing JOIN players ON players.name = raw_rb_passing.player
UNION
SELECT id,week,team,cmp,att,yds,td,int
FROM raw_wr_passing JOIN players ON players.name = raw_wr_passing.player;

/* Fill Rushing */
INSERT INTO rushing_weeks(player_id,week,team_id,att,yds,td)
SELECT id,week,team,att,yds,td
FROM raw_qb_rushing JOIN players ON players.name = raw_qb_rushing.player
UNION
SELECT id,week,team,att,yds,td
FROM raw_rb_rushing JOIN players ON players.name = raw_rb_rushing.player
UNION
SELECT id,week,team,att,yds,td
FROM raw_wr_rushing JOIN players ON players.name = raw_wr_rushing.player
UNION
SELECT id,week,team,att,yds,td
FROM raw_te_rushing JOIN players ON players.name = raw_te_rushing.player;

/* Fill Receiving */
INSERT INTO receiving_weeks(player_id,week,team_id,tgt,rec,yds,td)
SELECT id,week,team,tgt,rec,yds,td
FROM raw_qb_receiving JOIN players ON players.name = raw_qb_receiving.player
UNION
SELECT id,week,team,tgt,rec,yds,td
FROM raw_rb_receiving JOIN players ON players.name = raw_rb_receiving.player
UNION
SELECT id,week,team,tgt,rec,yds,td
FROM raw_wr_receiving JOIN players ON players.name = raw_wr_receiving.player
UNION
SELECT id,week,team,tgt,rec,yds,td
FROM raw_te_receiving JOIN players ON players.name = raw_te_receiving.player;

/* Fill Fantasy */
INSERT INTO fantasy_weeks(player_id,team_id,week,stand,ppr)
SELECT id,team,week,stand,ppr
FROM raw_qb_fantasy JOIN players ON players.name = raw_qb_fantasy.player
UNION
SELECT id,team,week,stand,ppr
FROM raw_rb_fantasy JOIN players ON players.name = raw_rb_fantasy.player
UNION
SELECT id,team,week,stand,ppr
FROM raw_wr_fantasy JOIN players ON players.name = raw_wr_fantasy.player
UNION
SELECT id,team,week,stand,ppr
FROM raw_te_fantasy JOIN players ON players.name = raw_te_fantasy.player;

/* Fill team_final_rankings */

/* QB */
INSERT INTO team_final_rankings (rank, pos, team_id, pprTotal, standardTotal)
SELECT *
FROM (
SELECT ROW_NUMBER() OVER (ORDER BY SUM(ppr) DESC), 'QB', team_id, SUM(ppr) as pprTotal, SUM(stand) as standardTotal
FROM fantasy_weeks
JOIN players
ON players.id = fantasy_weeks.player_id
WHERE pos = 'QB'
GROUP BY team_id
)sub;
/* RB */
INSERT INTO team_final_rankings (rank, pos, team_id, pprTotal, standardTotal)
SELECT *
FROM (
SELECT ROW_NUMBER() OVER (ORDER BY SUM(ppr) DESC), 'RB', team_id, SUM(ppr) as pprTotal, SUM(stand) as standardTotal
FROM fantasy_weeks
JOIN players
ON players.id = fantasy_weeks.player_id
WHERE pos = 'RB'
GROUP BY team_id
)sub;
/* WR */
INSERT INTO team_final_rankings (rank, pos, team_id, pprTotal, standardTotal)
SELECT *
FROM (
SELECT ROW_NUMBER() OVER (ORDER BY SUM(ppr) DESC), 'WR', team_id, SUM(ppr) as pprTotal, SUM(stand) as standardTotal
FROM fantasy_weeks
JOIN players
ON players.id = fantasy_weeks.player_id
WHERE pos = 'WR'
GROUP BY team_id
)sub;
/* TE */
INSERT INTO team_final_rankings (rank, pos, team_id, pprTotal, standardTotal)
SELECT *
FROM (
SELECT ROW_NUMBER() OVER (ORDER BY SUM(ppr) DESC), 'TE', team_id, SUM(ppr) as pprTotal, SUM(stand) as standardTotal
FROM fantasy_weeks
JOIN players
ON players.id = fantasy_weeks.player_id
WHERE pos = 'TE'
GROUP BY team_id
)sub;