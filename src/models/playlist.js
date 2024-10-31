const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  playlistId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  tracks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Track',
  }],
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
