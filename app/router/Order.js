import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from 'react-navigation-stack';

import Checkout from '../screens/Order/Checkout';

const OrderStack = createStackNavigator(
  {
    Checkout: {
      screen: Checkout,
      headerMode: 'none',
      cardStyle: { backgroundColor: 'transparent' },
      navigationOptions: {
        gestureEnabled: true,
        cardOverlayEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.SlideFromRightIOS,
    },
    // eslint-disable-next-line prettier/prettier
  },
);
export default OrderStack;
