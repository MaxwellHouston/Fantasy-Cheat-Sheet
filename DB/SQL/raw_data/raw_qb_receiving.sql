CREATE TABLE raw_qb_receiving(
   Player VARCHAR(50) NOT NULL
  ,Week   INTEGER  NOT NULL
  ,Team   VARCHAR(3) NOT NULL
  ,Home   VARCHAR(1)
  ,Opp    VARCHAR(3) NOT NULL
  ,Tgt    INTEGER  NOT NULL
  ,Rec    INTEGER  NOT NULL
  ,Yds    INTEGER  NOT NULL
  ,TD     INTEGER  NOT NULL
  ,code   VARCHAR(8) NOT NULL
  ,PRIMARY KEY(player, week)
);
INSERT INTO raw_qb_receiving(Player,Week,Team,Home,Opp,Tgt,Rec,Yds,TD,code) VALUES
 ('Tyree Jackson',18,'PHI',NULL,'DAL',5,3,22,1,'JackTy01')
,('Zach Wilson',15,'NYJ','@','MIA',1,0,0,0,'WilsZa00')
,('Aaron Rodgers',3,'GNB','@','SFO',1,1,-4,0,'RodgAa00')
,('Drew Lock',17,'DEN','@','LAC',1,1,1,0,'LockDr00')
,('Daniel Jones',7,'NYG',NULL,'CAR',1,1,16,0,'JoneDa05')
,('Tyree Jackson',11,'PHI',NULL,'NOR',1,0,0,0,'JackTy01')
,('Tyree Jackson',16,'PHI',NULL,'NYG',1,0,0,0,'JackTy01')
,('Jalen Hurts',2,'PHI',NULL,'SFO',1,0,0,0,'HurtJa00')
,('Taysom Hill',4,'NOR',NULL,'NYG',2,2,26,0,'HillTa00')
,('Taysom Hill',5,'NOR','@','WAS',2,1,11,0,'HillTa00')
,('Taysom Hill',10,'NOR','@','TEN',2,1,15,0,'HillTa00')
,('Taylor Heinicke',3,'WAS','@','BUF',1,1,-2,0,'HeinTa00');
