const SpotifyAPI = require('../api/SpotifyAPI');
const AppleMusicAPI = require('../api/AppleMusicAPI');
const DeezerAPI = require('../api/DeezerAPI');
const SoundCloudAPI = require('../api/SoundCloudAPI');

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

const getAppleMusicTracks = async (req, res) => {
  try {
    const tracks = await AppleMusicAPI.searchTracks(req.query.q);
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Apple Music tracks' });
  }
};

const getAppleMusicPlaylists = async (req, res) => {
  try {
    const playlists = await AppleMusicAPI.searchPlaylists(req.query.q);
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Apple Music playlists' });
  }
};

const getDeezerTracks = async (req, res) => {
  try {
    const tracks = await DeezerAPI.searchTracks(req.query.q);
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Deezer tracks' });
  }
};

const getDeezerPlaylists = async (req, res) => {
  try {
    const playlists = await DeezerAPI.searchPlaylists(req.query.q);
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Deezer playlists' });
  }
};

const getSoundCloudTracks = async (req, res) => {
  try {
    const tracks = await SoundCloudAPI.searchTracks(req.query.q);
    res.json(tracks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch SoundCloud tracks' });
  }
};

const getSoundCloudPlaylists = async (req, res) => {
  try {
    const playlists = await SoundCloudAPI.searchPlaylists(req.query.q);
    res.json(playlists);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch SoundCloud playlists' });
  }
};

module.exports = {
  getTracks,
  getPlaylists,
  getRecommendations,
  getAppleMusicTracks,
  getAppleMusicPlaylists,
  getDeezerTracks,
  getDeezerPlaylists,
  getSoundCloudTracks,
  getSoundCloudPlaylists,
};
