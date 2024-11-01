import React from 'react';
import { View, Text, Button, Share, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

const SocialSharing = ({ track, playlist }) => {
  const shareTrack = async () => {
    try {
      await Share.share({
        message: `Check out this track: ${track.title} by ${track.artist}`,
      });
    } catch (error) {
      console.error('Error sharing track:', error);
    }
  };

  const sharePlaylist = async () => {
    try {
      await Share.share({
        message: `Check out this playlist: ${playlist.name}`,
      });
    } catch (error) {
      console.error('Error sharing playlist:', error);
    }
  };

  const exportPlaylistAsJSON = async () => {
    const json = JSON.stringify(playlist);
    const fileUri = `${FileSystem.documentDirectory}${playlist.name}.json`;
    await FileSystem.writeAsStringAsync(fileUri, json);
    await Share.share({
      url: fileUri,
      message: `Check out this playlist: ${playlist.name}`,
    });
  };

  const exportPlaylistAsCSV = async () => {
    const csv = playlist.tracks.map(track => `${track.title},${track.artist}`).join('\n');
    const fileUri = `${FileSystem.documentDirectory}${playlist.name}.csv`;
    await FileSystem.writeAsStringAsync(fileUri, csv);
    await Share.share({
      url: fileUri,
      message: `Check out this playlist: ${playlist.name}`,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share with friends</Text>
      <Button title="Share Track" onPress={shareTrack} />
      <Button title="Share Playlist" onPress={sharePlaylist} />
      <Button title="Export Playlist as JSON" onPress={exportPlaylistAsJSON} />
      <Button title="Export Playlist as CSV" onPress={exportPlaylistAsCSV} />
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SocialSharing;
