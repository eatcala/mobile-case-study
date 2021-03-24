import React, { useEffect, useRef, useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import PropTypes from 'prop-types';

import { Animated, Dimensions, StyleSheet } from 'react-native';
import { useUserDispatch, useUserState } from '../../../context';

import MainView from './styles';

const bootSplashLogo = require('../../../../assets/bootsplash_logo_original.png');

const AppLoading = ({ loading }) => {
  const opacity = useRef(new Animated.Value(1));
  const translateY = useRef(new Animated.Value(0));
  const [bootSplashLogoIsLoaded, setBootSplashLogoIsLoaded] = useState(false);
  const { bootSplashIsVisible } = useUserState();
  const dispatch = useUserDispatch();

  useEffect(() => {
    !loading && bootSplashLogoIsLoaded && init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bootSplashLogoIsLoaded, loading]);

  const init = async () => {
    await BootSplash.hide();

    Animated.stagger(250, [
      Animated.spring(translateY.current, {
        useNativeDriver: true,
        toValue: -50,
      }),
      Animated.spring(translateY.current, {
        useNativeDriver: true,
        toValue: Dimensions.get('window').height,
      }),
    ]).start();

    Animated.timing(opacity.current, {
      useNativeDriver: true,
      toValue: 0,
      duration: 150,
      delay: 350,
    }).start(() => {
      dispatch({ type: 'HIDE_BOOTSPLASH', payload: false });
    });
  };

  return (
    <MainView style={styles.container}>
      {bootSplashIsVisible && (
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.bootsplash, { opacity: opacity.current }]}>
          <Animated.Image
            source={bootSplashLogo}
            fadeDuration={0}
            onLoadEnd={() => setBootSplashLogoIsLoaded(true)}
            style={[styles.logo, { transform: [{ translateY: translateY.current }] }]}
          />
        </Animated.View>
      )}
    </MainView>
  );
};

const styles = StyleSheet.create({
  bootsplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  logo: {
    height: 100,
    width: 100,
  },
});

AppLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default AppLoading;
