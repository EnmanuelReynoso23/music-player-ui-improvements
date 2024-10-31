document.addEventListener('DOMContentLoaded', () => {
  fetchTracks();
  fetchPlaylists();
  fetchRecommendations();
});

const fetchTracks = async () => {
  try {
    const response = await fetch('/api/music/tracks?q=popular');
    const tracks = await response.json();
    displayTracks(tracks);
  } catch (error) {
    console.error('Error fetching tracks:', error);
  }
};

const fetchPlaylists = async () => {
  try {
    const response = await fetch('/api/music/playlists?q=popular');
    const playlists = await response.json();
    displayPlaylists(playlists);
  } catch (error) {
    console.error('Error fetching playlists:', error);
  }
};

const fetchRecommendations = async () => {
  try {
    const response = await fetch('/api/music/recommendations?seed_tracks=popular');
    const recommendations = await response.json();
    displayRecommendations(recommendations);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
  }
};

const displayTracks = (tracks) => {
  const trackList = document.getElementById('track-list');
  trackList.innerHTML = '';
  tracks.forEach(track => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="track-title">${track.title}</span> - <span class="track-artist">${track.artist}</span>`;
    trackList.appendChild(li);
  });
};

const displayPlaylists = (playlists) => {
  const playlistList = document.getElementById('playlist-list');
  playlistList.innerHTML = '';
  playlists.forEach(playlist => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="playlist-name">${playlist.name}</span> - <span class="playlist-description">${playlist.description}</span>`;
    playlistList.appendChild(li);
  });
};

const displayRecommendations = (recommendations) => {
  const recommendationList = document.getElementById('recommendation-list');
  recommendationList.innerHTML = '';
  recommendations.forEach(recommendation => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="recommendation-title">${recommendation.title}</span> - <span class="recommendation-artist">${recommendation.artist}</span>`;
    recommendationList.appendChild(li);
  });
};
