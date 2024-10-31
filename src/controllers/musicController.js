const SpotifyAPI = require('../api/SpotifyAPI');

const getTracks = async (req, res) => {
  try {
    const tracks = await SpotifyAPI.searchTracks(req.query.q);
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tracks' });
  }
};

const getPlaylists = async (req, res) => {
  try {
    const playlists = await SpotifyAPI.searchPlaylists(req.query.q);
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch playlists' });
  }
};

const getRecommendations = async (req, res) => {
  try {
    const recommendations = await SpotifyAPI.getRecommendations(req.query.seed_tracks);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch recommendations' });
  }
};

module.exports = {
  getTracks,
  getPlaylists,
  getRecommendations,
};
