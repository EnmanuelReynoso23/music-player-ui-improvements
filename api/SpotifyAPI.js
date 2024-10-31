import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

const SpotifyAPI = {
  getAccessToken: async () => {
    // Implement authentication to get access token
  },

  searchTracks: async (query) => {
    const accessToken = await SpotifyAPI.getAccessToken();
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: 'track',
      },
    });
    return response.data.tracks.items;
  },

  searchAlbums: async (query) => {
    const accessToken = await SpotifyAPI.getAccessToken();
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: 'album',
      },
    });
    return response.data.albums.items;
  },

  searchPlaylists: async (query) => {
    const accessToken = await SpotifyAPI.getAccessToken();
    const response = await axios.get(`${SPOTIFY_API_BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: 'playlist',
      },
    });
    return response.data.playlists.items;
  },
};

export default SpotifyAPI;
