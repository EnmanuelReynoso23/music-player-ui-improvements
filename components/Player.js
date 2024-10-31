import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

const Player = ({ track }) => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: track.uri },
      { shouldPlay: true }
    );
    setSound(sound);
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
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
      <Text style={styles.trackTitle}>{track.title}</Text>
      <Button title={isPlaying ? "Pause" : "Play"} onPress={isPlaying ? pauseSound : playSound} />
      <Button title="Stop" onPress={stopSound} />
      <Button title="Skip" onPress={skipSound} />
      <Button title="Shuffle" onPress={shuffleSound} />
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
    marginBottom: 20,
  },
});

export default Player;
