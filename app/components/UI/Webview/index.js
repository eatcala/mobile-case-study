import React from 'react';
import { WebView } from 'react-native-webview';
import { MainView, WebViewDesign, BackNavigationView } from './styles';
import BackNavigation from '../BackNavigation';

const WebViewUI = ({ navigation: { navigate, getParam } }) => {
  const goBack = () => {
    navigate(getParam('back'));
  };
  return (
    <MainView>
      <BackNavigationView>
        <BackNavigation color="white" direction="left" onPress={goBack} />
      </BackNavigationView>
      <WebViewDesign>
        <WebView source={{ uri: getParam('address') }} />
      </WebViewDesign>
    </MainView>
  );
};
export default WebViewUI;
