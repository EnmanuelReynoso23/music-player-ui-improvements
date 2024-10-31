import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SpotifyAPI from '../api/SpotifyAPI';
import YouTubeMusicAPI from '../api/youtubeMusicApi';

const Home = () => {
  const navigation = useNavigation();
  const [playlists, setPlaylists] = useState([]);
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    fetchPlaylists();
    fetchRecentlyPlayed();
    fetchRecommendations();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const playlists = await SpotifyAPI.searchPlaylists('popular');
      setPlaylists(playlists);
    } catch (error) {
      console.error('Error fetching playlists:', error);
    }
  };

  const fetchRecentlyPlayed = async () => {
    try {
      const tracks = await SpotifyAPI.searchTracks('recently played');
      setRecentlyPlayed(tracks);
    } catch (error) {
      console.error('Error fetching recently played tracks:', error);
    }
  };

  const fetchRecommendations = async () => {
    try {
      const recommendations = await YouTubeMusicAPI.searchTracks('recommendations');
      setRecommendations(recommendations);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  const renderPlaylistItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Button title="View Playlist" onPress={() => navigation.navigate('Playlist', { playlist: item })} />
    </View>
  );

  const renderRecentlyPlayedItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Button title="Play" onPress={() => navigation.navigate('Player', { track: item })} />
    </View>
  );

  const renderRecommendationItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Button title="Play" onPress={() => navigation.navigate('Player', { track: item })} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Playlists</Text>
      <FlatList
        data={playlists}
        renderItem={renderPlaylistItem}
        keyExtractor={item => item.id}
      />
      <Text style={styles.sectionTitle}>Recently Played</Text>
      <FlatList
        data={recentlyPlayed}
        renderItem={renderRecentlyPlayedItem}
        keyExtractor={item => item.id}
      />
      <Text style={styles.sectionTitle}>Recommendations</Text>
      <FlatList
        data={recommendations}
        renderItem={renderRecommendationItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemTitle: {
    flex: 1,
    fontSize: 18,
  },
});

export default Home;
