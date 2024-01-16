CREATE TABLE raw_rb_passing(
   Player VARCHAR(50) NOT NULL
  ,Week   INTEGER  NOT NULL
  ,Team   VARCHAR(3) NOT NULL
  ,Home   VARCHAR(1)
  ,Opp    VARCHAR(3) NOT NULL
  ,Cmp    INTEGER  NOT NULL
  ,Att    INTEGER  NOT NULL
  ,Yds    INTEGER  NOT NULL
  ,TD     INTEGER  NOT NULL
  ,Int    INTEGER  NOT NULL
  ,code   VARCHAR(8) NOT NULL
  ,PRIMARY KEY(player, week)
);
INSERT INTO raw_rb_passing(Player,Week,Team,Home,Opp,Cmp,Att,Yds,TD,Int,code) VALUES
 ('D''Andre Swift',3,'DET',NULL,'BAL',0,1,0,0,0,'SwifDA00')
,('Cordarrelle Patterson',5,'ATL',NULL,'NYJ',0,1,0,0,0,'PattCo00')
,('David Montgomery',17,'CHI',NULL,'NYG',0,1,0,0,1,'MontDa01')
,('Derrick Henry',7,'TEN',NULL,'KAN',1,1,5,1,0,'HenrDe00')
,('Leonard Fournette',8,'TAM','@','NOR',0,1,0,0,0,'FourLe00')
,('Ezekiel Elliott',10,'DAL',NULL,'ATL',1,1,4,0,0,'ElliEz00')
,('Rex Burkhead',8,'HOU',NULL,'LAR',0,1,0,0,0,'BurkRe00');