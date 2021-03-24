import { Dimensions, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const dim = Dimensions.get('window');

export function getPhoneHeight() {
  return dim.height;
}

export function getPhoneWidth() {
  return dim.width;
}

export function getNotchMargin() {
  if (DeviceInfo.getBrand() === 'Apple') {
    if (DeviceInfo.hasNotch()) {
      return 44; // Notch size Iphone X and newer
    } else {
      return 20; // Iphone without notch
    }
  }
  return StatusBar.currentHeight;
}
