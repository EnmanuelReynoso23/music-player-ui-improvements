import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import YouTubeMusicAPI from '../api/youtubeMusicApi';
import AppleMusicAPI from '../api/AppleMusicAPI';
import DeezerAPI from '../api/DeezerAPI';
import SoundCloudAPI from '../api/SoundCloudAPI';

const Playlist = ({ playlist, onAddTrack, onRemoveTrack, onReorderTracks }) => {
  const [tracks, setTracks] = useState(playlist.tracks);

  const addTrack = (track) => {
    setTracks([...tracks, track]);
    onAddTrack(track);
  };

  const removeTrack = (track) => {
    setTracks(tracks.filter(t => t.id !== track.id));
    onRemoveTrack(track);
  };

  const reorderTracks = ({ data }) => {
    setTracks(data);
    onReorderTracks(data);
  };

  const saveReorderedPlaylist = () => {
    // Implement save functionality
  };

  const fetchAlbumArtAndArtistImage = async (track) => {
    const fetchedAlbumArt = await YouTubeMusicAPI.searchAlbums(track.album);
    const fetchedArtistImage = await YouTubeMusicAPI.searchTracks(track.artist);
    return {
      albumArt: fetchedAlbumArt[0].snippet.thumbnails.default.url,
      artistImage: fetchedArtistImage[0].snippet.thumbnails.default.url,
    };
  };

  const fetchAppleMusicTracks = async (query) => {
    try {
      const tracks = await AppleMusicAPI.searchTracks(query);
      return tracks;
    } catch (error) {
      console.error('Error fetching Apple Music tracks:', error);
      return [];
    }
  };

  const fetchDeezerTracks = async (query) => {
    try {
      const tracks = await DeezerAPI.searchTracks(query);
      return tracks;
    } catch (error) {
      console.error('Error fetching Deezer tracks:', error);
      return [];
    }
  };

  const fetchSoundCloudTracks = async (query) => {
    try {
      const tracks = await SoundCloudAPI.searchTracks(query);
      return tracks;
    } catch (error) {
      console.error('Error fetching SoundCloud tracks:', error);
      return [];
    }
  };

  const renderItem = ({ item, drag }) => (
    <View style={styles.trackContainer}>
      <Image source={{ uri: item.albumArt }} style={styles.albumArt} />
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{item.title}</Text>
        <Text style={styles.trackArtist}>{item.artist}</Text>
      </View>
      <Button title="Remove" onPress={() => removeTrack(item)} />
      <Button title="Drag" onPressIn={drag} />
    </View>
  );

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onDragEnd={reorderTracks}
      />
      <Button title="Add Track" onPress={() => addTrack({ id: 'new', title: 'New Track', artist: 'Unknown', albumArt: 'https://via.placeholder.com/150' })} />
      <Button title="Save Playlist" onPress={saveReorderedPlaylist} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  trackContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  albumArt: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  trackInfo: {
    flex: 1,
  },
  trackTitle: {
    fontSize: 18,
  },
  trackArtist: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Playlist;
