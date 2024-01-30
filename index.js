const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const { PORT, sessionSecret } = require('./utils/config');
const authRouter = require('./routes/auth-router');
const { loadPassport } = require('./utils/passport-config');
const teamRouter = require('./routes/team-router');
const playerRouter = require('./routes/player-router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
loadPassport(passport);

app.use('/auth', authRouter);
app.use('/teams', teamRouter);
app.use('/players', playerRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
