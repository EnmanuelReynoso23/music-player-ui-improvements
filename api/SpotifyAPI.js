import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

const SpotifyAPI = {
  getAccessToken: async () => {
    const clientId = 'your-client-id';
    const clientSecret = 'your-client-secret';
    const authOptions = {
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'grant_type=client_credentials'
    };
    try {
      const response = await axios(authOptions);
      return response.data.access_token;
    } catch (error) {
      console.error('Error fetching access token:', error);
      throw error;
    }
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

  importPlaylists: async (playlists) => {
    // Implement functionality to import playlists from different platforms
  },

  mergePlaylists: async (playlists) => {
    // Implement functionality to merge playlists from different platforms
  },
};

export default SpotifyAPI;
