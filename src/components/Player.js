import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, Animated } from 'react-native';
import { Audio } from 'expo-av';
import YouTubeMusicAPI from '../api/youtubeMusicApi';

const Player = ({ track }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [lyrics, setLyrics] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));
  const [albumArt, setAlbumArt] = useState('');
  const [artistImage, setArtistImage] = useState('');

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    fetchLyrics();
    fetchAlbumArtAndArtistImage();
  }, [track]);

  const fetchLyrics = async () => {
    const fetchedLyrics = await YouTubeMusicAPI.searchTracks(track.title);
    setLyrics(fetchedLyrics[0].snippet.description);
  };

  const fetchAlbumArtAndArtistImage = async () => {
    const fetchedAlbumArt = await YouTubeMusicAPI.searchAlbums(track.album);
    const fetchedArtistImage = await YouTubeMusicAPI.searchTracks(track.artist);
    setAlbumArt(fetchedAlbumArt[0].snippet.thumbnails.default.url);
    setArtistImage(fetchedArtistImage[0].snippet.thumbnails.default.url);
  };

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: track.uri },
      { shouldPlay: true }
    );
    setSound(sound);
    setIsPlaying(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
  };

  const skipSound = async () => {
    // Implement skip functionality
  };

  const shuffleSound = async () => {
    // Implement shuffle functionality
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: albumArt }} style={styles.albumArt} />
      <Image source={{ uri: artistImage }} style={styles.artistImage} />
      <Text style={styles.trackTitle}>{track.title}</Text>
      <Text style={styles.trackArtist}>{track.artist}</Text>
      <Button title={isPlaying ? "Pause" : "Play"} onPress={isPlaying ? pauseSound : playSound} />
      <Button title="Stop" onPress={stopSound} />
      <Button title="Skip" onPress={skipSound} />
      <Button title="Shuffle" onPress={shuffleSound} />
      <Animated.View style={{ ...styles.lyricsContainer, opacity: fadeAnim }}>
        <Text style={styles.lyrics}>{lyrics}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumArt: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  artistImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
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
  lyricsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
  },
  lyrics: {
    fontSize: 16,
    color: 'white',
  },
});

export default Player;
