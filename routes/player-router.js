const express = require('express');
const PlayerModel = require('../models/player-model');

const playerRouter = express.Router();
const playerInstance = new PlayerModel();

playerRouter.use('/*/:playerId', (req, res, next) => {
    req.playerId = req.params.playerId;
    next();
})

playerRouter.get('/', async (req, res) => {
    try {
        const players = await playerInstance.getAllPlayers();
        res.json(players)
    } catch (error) {
        res.status(500).json(error)
    }
})

playerRouter.get('/bio/:playerId', async (req,res) => {
    try {
        const bio = await playerInstance.getPlayerBio(req.playerId);
        res.json(bio)
    } catch (error) {
        res.status(500).json(error)
    }
})

playerRouter.get('/season/:playerId', async (req,res) => {
    try {
        const seasonTotals = await playerInstance.getPlayerTotals(req.playerId);
        res.json(seasonTotals)
    } catch (error) {
        res.status(500).json(error)
    }
})

playerRouter.get('/weekly/:playerId', async (req,res) => {
    try {
        const weeklyTotals = await playerInstance.getWeeklyTotals(req.playerId);
        res.json(weeklyTotals)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = playerRouter;
