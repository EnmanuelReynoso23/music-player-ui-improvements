import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Player from './Player';

const Track = ({ track }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.trackTitle}>{track.title}</Text>
      <Text style={styles.trackArtist}>{track.artist}</Text>
      <Player track={track} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Track;
