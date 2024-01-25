const express = require('express');
const TeamModel = require('../models/team-model');

const teamRouter = express.Router();
const teamInstance = new TeamModel();

teamRouter.use('/*/:teamId', (req, res, next) => {
  req.teamId = req.params.teamId.toUpperCase();
  next();
});

teamRouter.get('/', async (req, res) => {
  try {
    const teams = await teamInstance.getAllTeams();
    res.json(teams);
  } catch (error) {
    res.status(500).json(error);
  }
});

teamRouter.get('/rankings', async (req, res) => {
  try {
    const rankings = await teamInstance.getAllFinalRankings();
    res.json(rankings);
  } catch (error) {
    res.status(500).json(error);
  }
});

teamRouter.get('/rankings/:teamId', async (req, res) => {
  try {
    const rankings = await teamInstance.getFinalRankingsById(req.teamId);
    res.json(rankings);
  } catch (error) {
    res.status(500).json(error);
  }
});

teamRouter.get('/bio/:teamId', async (req, res) => {
  try {
    const bio = await teamInstance.getTeamBio(req.teamId);
    res.json(bio);
  } catch (error) {
    res.status(500).json(error);
  }
});

teamRouter.get('/roster/:teamId', async (req, res) => {
  try {
    const roster = await teamInstance.getTeamRoster(req.teamId);
    res.json(roster);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = teamRouter;
