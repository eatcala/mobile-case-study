import { Platform } from 'react-native';
import isBigPhone from '../utils/isBigPhone';

const theme = {
  ios: {
    spacing: Platform.OS === 'ios' ? (isBigPhone() ? 48 : 32) : isBigPhone ? 32 : 18,
  },
  topSpacing: Platform.OS === 'ios' ? (isBigPhone() ? 48 : 24) : isBigPhone() ? 32 : 18,
  spacing: 15,
  notchSpacing: 10,
  menuPicture: {
    bigScreen: {
      height: '55%',
      width: '100%',
    },
    smallScreen: {
      height: '52%',
      width: '110%',
    },
  },
  navigation: {
    padding: 15,
    margin: 24,
    close: {
      width: 16,
      height: 16,
    },
    back: {
      width: 16,
      height: 16,
    },
  },
  colors: {
    red: '#f41f22',
    green: '#0c9266',
    yellow: '#ffeF5f',
    yellowUnselected: 'rgba(255, 239, 95, 0.6)',
    whiteUnselected: '#4f4f4f',
    black: '#222222',
    whiteLight: '#e0e0e0',
    white: '#fff',
  },
  title: {
    fontSize: 25,
    fontFamily: 'Roboto',
    marginBottom: 38,
    fontWeight: 700,
  },
  list: {
    marginBottom: 12,
    item: {
      color: '#E0E0E0',
      fontFamily: 'Roboto',
      fontSize: 16,
      padding: '12px 0',
      icon: {
        width: 25,
        height: 25,
        marginRight: 22,
      },
      cardIcon: {
        width: 35,
        height: 35,
        marginRight: 12,
      },
    },
  },
  authentication: {
    title: {
      fontSize: 43,
      fontFamily: 'Boogaloo-Regular',
      marginBottom: 17,
      marginTop: 17,
      lineHeight: 41,
    },
    subtitle: {
      fontSize: 15,
      fontFamily: 'Roboto-Regular',
      marginBottom: 42,
      fontWeight: 500,
      lineHeight: 20,
    },
  },
  input: {
    fontWeight: '700',
    letterSpacing: 1,
    paddingLeft: 7,
    fontSize: 19,
    fontFamily: 'Roboto',
  },
  button: {
    margin: '15',
  },
};

export default theme;
