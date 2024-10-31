import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lyrics = ({ track }) => {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    fetchLyrics();
  }, [track]);

  const fetchLyrics = async () => {
    // Implement API call to fetch lyrics for the current track
    const fetchedLyrics = 'Sample lyrics for the current track';
    setLyrics(fetchedLyrics);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.lyrics}>{lyrics}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default Lyrics;
