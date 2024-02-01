const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user-model');

const userInstance = new UserModel();

const loadPassport = (passport) => {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        try {
          const user = await userInstance.getUserByEmail(email);
          if (!user) return done(null, false);
          const matchPasswords = await bcrypt.compare(password, user.password);
          if (!matchPasswords) return done(null, false);
          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userInstance.getUserById(id);
      if (!user) return done(null, false);
      user.password = '******';
      return done(null, user);
    } catch (error) {
      return done(error);
    }
  });
};

const checkAuthentication = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(400).json({ message: 'Please login' });
};

module.exports = { loadPassport, checkAuthentication };
