const express = require('express');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const passport = require('passport');
const UserModel = require('../models/user-model');

const authRouter = express.Router();
const userInstance = new UserModel();

authRouter.post('/sign-up', async (req, res) => {
    const userData = req.body;
    userData.id = crypto.randomUUID();
    try {
        const password = await bcrypt.hash(userData.password, 10);
        userData.password = password;
        const newUser = await userInstance.createUser(userData);
        if(newUser) res.status(201).json('User created')
    } catch (error) {
        res.status(500).json(error)
    }
})

authRouter.post('/login', passport.authenticate('local', {failureRedirect: '/'}), async (req, res) => {
   res.json('User logged in')
})

authRouter.post('/log-out', (req, res) => {
    req.logout((err) => {
        res.status(500).json(err)
    })
    res.json('User logged out')
})

module.exports = authRouter;