import axios from 'axios';

const DEEZER_API_BASE_URL = 'https://api.deezer.com';

const DeezerAPI = {
  getAccessToken: async () => {
    // Implement authentication to get access token
  },

  searchTracks: async (query) => {
    const accessToken = await DeezerAPI.getAccessToken();
    const response = await axios.get(`${DEEZER_API_BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: 'track',
      },
    });
    return response.data.data;
  },

  searchAlbums: async (query) => {
    const accessToken = await DeezerAPI.getAccessToken();
    const response = await axios.get(`${DEEZER_API_BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: 'album',
      },
    });
    return response.data.data;
  },

  searchPlaylists: async (query) => {
    const accessToken = await DeezerAPI.getAccessToken();
    const response = await axios.get(`${DEEZER_API_BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: query,
        type: 'playlist',
      },
    });
    return response.data.data;
  },
};

export default DeezerAPI;
