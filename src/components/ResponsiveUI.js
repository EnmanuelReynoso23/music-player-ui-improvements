import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const ResponsiveUI = () => {
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Responsive UI</Text>
      <Text style={styles.text}>Width: {width}</Text>
      <Text style={styles.text}>Height: {height}</Text>
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
  text: {
    fontSize: 18,
    color: 'black',
  },
});

export default ResponsiveUI;
