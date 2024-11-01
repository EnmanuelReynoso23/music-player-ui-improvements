import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';

const CustomPlaylist = ({ playlist, onAddTrack, onRemoveTrack, onReorderTracks }) => {
  const [tracks, setTracks] = useState(playlist.tracks);

  const addTrack = (track) => {
    setTracks([...tracks, track]);
    onAddTrack(track);
  };

  const removeTrack = (track) => {
    setTracks(tracks.filter(t => t.id !== track.id));
    onRemoveTrack(track);
  };

  const reorderTracks = ({ data }) => {
    setTracks(data);
    onReorderTracks(data);
  };

  const saveReorderedPlaylist = () => {
    // Implement save functionality
  };

  const renderItem = ({ item, drag }) => (
    <View style={styles.trackContainer}>
      <Text style={styles.trackTitle}>{item.title}</Text>
      <Text style={styles.trackArtist}>{item.artist}</Text>
      <Button title="Remove" onPress={() => removeTrack(item)} />
      <Button title="Drag" onPressIn={drag} />
    </View>
  );

  return (
    <View style={styles.container}>
      <DraggableFlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onDragEnd={reorderTracks}
      />
      <Button title="Add Track" onPress={() => addTrack({ id: 'new', title: 'New Track', artist: 'Unknown' })} />
      <Button title="Save Playlist" onPress={saveReorderedPlaylist} />
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

export default CustomPlaylist;
