CREATE TABLE raw_wr_passing(
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

INSERT INTO raw_wr_passing(Player,Week,Team,Home,Opp,Cmp,Att,Yds,TD,Int,code) VALUES
('Deebo Samuel',18,'SFO','@','LAR',1,1,24,1,0,'SamuDe00')
,('Tom Kennedy',18,'DET',NULL,'GNB',1,1,75,1,0,'KennTo01')
,('Courtland Sutton',18,'DEN',NULL,'KAN',1,1,16,0,0,'SuttCo00')
,('Greg Ward',18,'PHI',NULL,'DAL',1,1,2,0,0,'WardGr02')
,('Brandon Zylstra',18,'CAR','@','TAM',0,1,0,0,0,'ZylsBr00')
,('Cedrick Wilson Jr.',17,'DAL',NULL,'ARI',1,1,31,0,0,'WilsCe01')
,('Cedrick Wilson Jr.',8,'DAL','@','MIN',1,1,35,0,0,'WilsCe01')
,('Cedrick Wilson Jr.',5,'DAL',NULL,'NYG',1,1,22,0,0,'WilsCe01')
,('Albert Wilson',11,'MIA','@','NYJ',0,1,0,0,0,'WilsAl02')
,('Greg Ward',2,'PHI',NULL,'SFO',0,1,0,0,0,'WardGr02')
,('Kadarius Toney',11,'NYG','@','TAM',0,1,0,0,0,'ToneKa00')
,('Kadarius Toney',8,'NYG','@','KAN',1,1,19,0,0,'ToneKa00')
,('Kadarius Toney',5,'NYG','@','DAL',0,1,0,0,0,'ToneKa00')
,('Deebo Samuel',15,'SFO',NULL,'ATL',0,1,0,0,0,'SamuDe00')
,('Dante Pettis',7,'NYG',NULL,'CAR',1,1,16,0,0,'PettDa00')
,('Jakobi Meyers',4,'NWE',NULL,'TAM',2,2,45,0,0,'MeyeJa01')
,('Cooper Kupp',12,'LAR','@','GNB',0,1,0,0,0,'KuppCo00')
,('Christian Kirk',9,'ARI','@','SFO',1,1,33,0,0,'KirkCh01')
,('Justin Jefferson',13,'MIN','@','DET',0,1,0,0,0,'JeffJu00')
,('Justin Jefferson',12,'MIN','@','SFO',1,1,24,0,0,'JeffJu00')
,('Justin Jefferson',8,'MIN',NULL,'DAL',0,1,0,0,0,'JeffJu00')
,('Justin Jefferson',1,'MIN','@','CIN',1,1,11,0,0,'JeffJu00')
,('Kendall Hinton',17,'DEN','@','LAC',1,1,1,0,0,'HintKe00')
,('Keelan Cole',15,'NYJ','@','MIA',0,1,0,0,0,'ColeKe00')
,('A.J. Brown',16,'TEN',NULL,'SFO',0,1,0,0,0,'BrowAJ00')
,('A.J. Brown',8,'TEN','@','IND',0,1,0,0,0,'BrowAJ00')
,('Tyler Boyd',8,'CIN','@','NYJ',1,1,46,0,0,'BoydTy00')
,('Kendrick Bourne',7,'NWE',NULL,'NYJ',1,1,25,1,0,'BourKe00')
,('Cole Beasley',8,'BUF',NULL,'MIA',0,1,0,0,0,'BeasCo00')
,('Danny Amendola',9,'HOU','@','MIA',0,1,0,0,0,'AmenDa00')
,('Keenan Allen',15,'LAC',NULL,'KAN',0,1,0,0,0,'AlleKe00');