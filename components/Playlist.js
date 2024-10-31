import React, { useState } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';

const Playlist = ({ playlist, onAddTrack, onRemoveTrack }) => {
  const [tracks, setTracks] = useState(playlist.tracks);

  const addTrack = (track) => {
    setTracks([...tracks, track]);
    onAddTrack(track);
  };

  const removeTrack = (track) => {
    setTracks(tracks.filter(t => t.id !== track.id));
    onRemoveTrack(track);
  };

  const renderItem = ({ item }) => (
    <View style={styles.trackContainer}>
      <Image source={{ uri: item.albumArt }} style={styles.albumArt} />
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{item.title}</Text>
        <Text style={styles.trackArtist}>{item.artist}</Text>
      </View>
      <Button title="Remove" onPress={() => removeTrack(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="Add Track" onPress={() => addTrack({ id: 'new', title: 'New Track', artist: 'Unknown', albumArt: 'https://via.placeholder.com/150' })} />
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
