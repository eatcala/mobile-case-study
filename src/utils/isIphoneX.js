import { Dimensions, Platform } from 'react-native';

export function isIphoneX() {
  const dim = Dimensions.get('window');

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    isIPhoneXSize(dim)
  );
}

export function isIPhoneXSize(dim) {
  return dim.height >= 812 || dim.width >= 812;
}
