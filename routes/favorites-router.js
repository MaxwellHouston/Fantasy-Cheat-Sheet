const express = require('express');
const FavoritesModel = require('../models/favorites-model');
const { checkAuthentication } = require('../utils/passport-config');

const favoritesRouter = express.Router();
const favoritesInstance = new FavoritesModel();

favoritesRouter.use('/*', checkAuthentication);

favoritesRouter.get('/', async (req, res) => {
  try {
    const favorites = await favoritesInstance.getFavorites(req.user.id);
    res.json(favorites);
  } catch (error) {
    res.status(500).json(error);
  }
});

favoritesRouter.post('/:playerId', async (req, res) => {
  try {
    const addPlayer = await favoritesInstance.addFavorite(
      req.user.id,
      req.params.playerId
    );
    if (addPlayer) res.json('Player added to favorites!');
  } catch (error) {
    res.status(500).json(error);
  }
});

favoritesRouter.delete('/:playerId', async (req, res) => {
  try {
    const playerRemoved = await favoritesInstance.removeFavorite(
      req.user.id,
      req.params.playerId
    );
    if (playerRemoved) return res.status(204);
    res.status(400).json('Player not found');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = favoritesRouter;
