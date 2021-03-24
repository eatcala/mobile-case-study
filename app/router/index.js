import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import Order from './Order';

const App = createStackNavigator(
  {
    Order,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: false,
      cardOverlayEnabled: false,
      ...TransitionPresets.SlideFromRightIOS,
    },
    // eslint-disable-next-line prettier/prettier
  },
);

const AppNavigator = createSwitchNavigator({
  App,
});

export default createAppContainer(AppNavigator);
