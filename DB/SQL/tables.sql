
CREATE TABLE stadiums(
    id INTEGER PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    capacity INTEGER  NOT NULL
);

CREATE TABLE teams(
    id VARCHAR(3) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL,
    stadium_id INTEGER REFERENCES stadiums(id) ON DELETE CASCADE,
    conference VARCHAR(50),
    division VARCHAR(50)
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name varchar(50) NOT NULL,
    pos varchar(2) NOT NULL
);

CREATE TABLE games (
    week INTEGER NOT NULL,
    home VARCHAR(3) REFERENCES teams(id) ON DELETE CASCADE,
    away VARCHAR(3) REFERENCES teams(id) ON DELETE CASCADE,
    PRIMARY KEY(week, home, away)
);

CREATE TABLE passing_weeks (
    player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
    team_id VARCHAR(3) REFERENCES teams(id) ON DELETE CASCADE,
    week INTEGER,
    att INTEGER NOT NULL,
    cmp INTEGER NOT NULL,
    yds INTEGER NOT NULL,
    td INTEGER NOT NULL,
    int INTEGER NOT NULL,
    PRIMARY KEY(player_id, week)
);

CREATE TABLE rushing_weeks (
    player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
    team_id VARCHAR(3) REFERENCES teams(id) ON DELETE CASCADE,
    week INTEGER,
    att INTEGER NOT NULL,
    yds INTEGER NOT NULL,
    td INTEGER NOT NULL,
    PRIMARY KEY(player_id, week)
);

CREATE TABLE receiving_weeks (
    player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
    team_id VARCHAR(3) REFERENCES teams(id) ON DELETE CASCADE,
    week INTEGER,
    tgt INTEGER NOT NULL,
    rec INTEGER NOT NULL,
    yds INTEGER NOT NULL,
    td INTEGER NOT NULL,
    PRIMARY KEY(player_id, week)
);

CREATE TABLE fantasy_weeks (
    player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
    team_id VARCHAR(3) REFERENCES teams(id) ON DELETE CASCADE,
    week INTEGER,
    stand NUMERIC(5,2) NOT NULL,
    ppr NUMERIC(5,2) NOT NULL,
    PRIMARY KEY(player_id, week)
);

CREATE TABLE team_final_rankings (
  rank INTEGER,
  pos VARCHAR(2),
  team_id VARCHAR(3) REFERENCES teams(id) ON DELETE CASCADE,
  pprTotal INTEGER,
  standardTotal INTEGER,
  PRIMARY KEY(rank, pos)
);

CREATE TABLE user_account (
    id VARCHAR(36) PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    name VARCHAR(100),
    date_created DATE DEFAULT now()
)

CREATE TABLE user_players (
    user_id VARCHAR(36) REFERENCES user_account(id) ON DELETE CASCADE,
    player_id INTEGER REFERENCES players(id) ON DELETE CASCADE,
    PRIMARY KEY(user_id, player_id)
)

