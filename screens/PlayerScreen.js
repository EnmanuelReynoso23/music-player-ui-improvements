import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Player from '../components/Player';

const PlayerScreen = ({ route, navigation }) => {
  const { track } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.trackTitle}>{track.title}</Text>
      <Text style={styles.trackArtist}>{track.artist}</Text>
      <Player track={track} />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="View Playlist" onPress={() => navigation.navigate('Playlist', { playlist: track.playlist })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  trackTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  trackArtist: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
});

export default PlayerScreen;
