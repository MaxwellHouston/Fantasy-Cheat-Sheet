CREATE TABLE raw_te_rushing(
   Player VARCHAR(50) NOT NULL
  ,Week   INTEGER  NOT NULL
  ,Team   VARCHAR(3) NOT NULL
  ,Home   VARCHAR(1)
  ,Opp    VARCHAR(3) NOT NULL
  ,Att    INTEGER  NOT NULL
  ,Yds    INTEGER  NOT NULL
  ,TD     INTEGER  NOT NULL
  ,code   VARCHAR(8) NOT NULL
  ,PRIMARY KEY(player, week)
);

INSERT INTO raw_te_rushing(Player,Week,Team,Home,Opp,Att,Yds,TD,code) VALUES
 ('Mark Andrews',18,'BAL',NULL,'PIT',1,0,0,'AndrMa00')
,('Tommy Tremble',18,'CAR','@','TAM',1,4,0,'TremTo00')
,('Jonnu Smith',18,'NWE','@','MIA',1,5,0,'SmitJo01')
,('Tommy Tremble',6,'CAR',NULL,'MIN',1,0,0,'TremTo00')
,('Tommy Tremble',3,'CAR','@','HOU',1,7,1,'TremTo00')
,('Durham Smythe',12,'MIA',NULL,'CAR',2,3,0,'SmytDu00')
,('Jonnu Smith',17,'NWE',NULL,'JAX',1,5,0,'SmitJo01')
,('Jonnu Smith',15,'NWE','@','IND',1,2,0,'SmitJo01')
,('Jonnu Smith',13,'NWE','@','BUF',1,-1,0,'SmitJo01')
,('Jonnu Smith',12,'NWE',NULL,'TEN',1,9,0,'SmitJo01')
,('Jonnu Smith',9,'NWE','@','CAR',1,4,0,'SmitJo01')
,('Jonnu Smith',7,'NWE',NULL,'NYJ',1,5,0,'SmitJo01')
,('Jonnu Smith',5,'NWE','@','HOU',1,5,0,'SmitJo01')
,('Jonnu Smith',1,'NWE',NULL,'MIA',1,6,0,'SmitJo01')
,('Jaylen Samuels',13,'HOU',NULL,'IND',2,2,0,'SamuJa00')
,('Jaylen Samuels',17,'HOU','@','SFO',3,7,0,'SamuJa00')
,('David Njoku',11,'CLE',NULL,'DET',1,1,0,'NjokDa00')
,('Cole Kmet',6,'CHI',NULL,'GNB',1,0,0,'KmetCo00')
,('George Kittle',3,'SFO',NULL,'GNB',1,9,0,'KittGe00')
,('George Kittle',13,'SFO','@','SEA',1,5,0,'KittGe00')
,('George Kittle',17,'SFO',NULL,'HOU',1,6,0,'KittGe00')
,('Travis Kelce',11,'KAN',NULL,'DAL',1,4,1,'KelcTr00')
,('Travis Kelce',17,'KAN','@','CIN',1,-1,0,'KelcTr00')
,('Gerald Everett',7,'SEA',NULL,'NOR',1,12,0,'EverGe00')
,('Gerald Everett',8,'SEA',NULL,'JAX',1,-5,0,'EverGe00')
,('Gerald Everett',14,'SEA','@','HOU',1,13,0,'EverGe00')
,('Zach Ertz',7,'ARI',NULL,'HOU',1,4,0,'ErtzZa00')
,('Evan Engram',4,'NYG','@','NOR',1,-3,0,'EngrEv00')
,('Eric Ebron',6,'PIT',NULL,'SEA',1,1,1,'EbroEr00')
,('Blake Bell',17,'KAN','@','CIN',1,2,0,'BellBl00')
,('Blake Bell',15,'KAN','@','LAC',1,3,0,'BellBl00')
,('Blake Bell',10,'KAN','@','LVR',1,3,0,'BellBl00')
,('Blake Bell',1,'KAN',NULL,'CLE',1,2,0,'BellBl00')
,('Jordan Akins',4,'HOU','@','BUF',1,3,0,'AkinJo00');
