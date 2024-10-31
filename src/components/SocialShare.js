import React from 'react';
import { View, Text, Button, Share, StyleSheet } from 'react-native';

const SocialShare = ({ track, playlist }) => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Share with friends</Text>
      <Button title="Share Track" onPress={shareTrack} />
      <Button title="Share Playlist" onPress={sharePlaylist} />
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

export default SocialShare;
