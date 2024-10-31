import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import Playlist from '../components/Playlist';

const PlaylistScreen = ({ route }) => {
  const { playlist } = route.params;
  const [tracks, setTracks] = useState(playlist.tracks);

  const addTrack = (track) => {
    setTracks([...tracks, track]);
  };

  const removeTrack = (track) => {
    setTracks(tracks.filter(t => t.id !== track.id));
  };

  const reorderTracks = (startIndex, endIndex) => {
    const result = Array.from(tracks);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setTracks(result);
  };

  const renderItem = ({ item }) => (
    <View style={styles.trackContainer}>
      <Text style={styles.trackTitle}>{item.title}</Text>
      <Text style={styles.trackArtist}>{item.artist}</Text>
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
      <Button title="Add Track" onPress={() => addTrack({ id: 'new', title: 'New Track', artist: 'Unknown' })} />
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
  trackTitle: {
    fontSize: 18,
  },
  trackArtist: {
    fontSize: 14,
    color: 'gray',
  },
});

export default PlaylistScreen;
