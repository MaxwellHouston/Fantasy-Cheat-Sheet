const express = require('express');
const TeamModel = require('../models/team-model');

const teamRouter = express.Router();
const teamInstance = new TeamModel();

teamRouter.get('/', async (req, res) => {
    try {
        const teams = await teamInstance.getAllTeams();
        res.json(teams);
    } catch (error) {
        res.status(500).json(error);
    }
})

teamRouter.get('/rankings', async (req, res) => {
    try {
        const rankings = await teamInstance.getAllFinalRankings()
        res.json(rankings);
    } catch (error) {
        res.status(500).json(error);
    }
})

teamRouter.get('/rankings/:team_id', async (req, res) => {
    try {
        const rankings = await teamInstance.getFinalRankingsById(req.params.team_id)
        res.json(rankings);
    } catch (error) {
        res.status(500).json(error);
    }
})

teamRouter.get('/bio/:team_id', async (req, res) => {
    try {
        const bio = await teamInstance.getTeamBio(req.params.team_id)
        res.json(bio);
    } catch (error) {
        res.status(500).json(error);
    }
})

teamRouter.get('/roster/:team_id', async (req, res) => {
    try {
        const roster = await teamInstance.getTeamRoster(req.params.team_id)
        res.json(roster);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = teamRouter;