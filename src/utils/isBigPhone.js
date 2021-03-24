import { Dimensions } from 'react-native';

const isBigPhone = () => {
  const dim = Dimensions.get('window');
  return dim.height >= 812 || dim.width >= 812;
};

export default isBigPhone;
