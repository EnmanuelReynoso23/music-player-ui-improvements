const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.get('/tracks', musicController.getTracks);
router.get('/playlists', musicController.getPlaylists);
router.get('/recommendations', musicController.getRecommendations);

module.exports = router;
