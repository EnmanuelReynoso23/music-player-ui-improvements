import { StyleSheet } from 'react-native';

const Theme = StyleSheet.create({
  // Color scheme
  primaryColor: {
    color: '#1db954',
  },
  secondaryColor: {
    color: '#191414',
  },
  backgroundColor: {
    backgroundColor: '#121212',
  },
  textColor: {
    color: '#ffffff',
  },
  accentColor: {
    color: '#1ed760',
  },

  // Typography
  bodyText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 1.5,
    color: '#ffffff',
  },
  heading: {
    fontFamily: 'Roboto',
    color: '#1db954',
    margin: 0,
    padding: 0,
  },
  paragraph: {
    margin: 0,
    marginBottom: 16,
  },

  // Spacing
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 40,
  },
  track: {
    marginBottom: 20,
  },
  playlist: {
    marginBottom: 20,
  },
  recommendation: {
    marginBottom: 20,
  },

  // Responsive design
  '@media (max-width: 768px)': {
    container: {
      padding: 10,
    },
    section: {
      marginBottom: 20,
    },
    track: {
      marginBottom: 10,
    },
    playlist: {
      marginBottom: 10,
    },
    recommendation: {
      marginBottom: 10,
    },
  },
  '@media (max-width: 480px)': {
    bodyText: {
      fontSize: 14,
    },
    container: {
      padding: 5,
    },
    section: {
      marginBottom: 10,
    },
    track: {
      marginBottom: 5,
    },
    playlist: {
      marginBottom: 5,
    },
    recommendation: {
      marginBottom: 5,
    },
  },
});

export default Theme;
