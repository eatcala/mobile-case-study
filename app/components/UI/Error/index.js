import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, Dimensions } from 'react-native';
import { ErrorText, ErrorContainer } from './styles';

const dim = Dimensions.get('window');

const Error = ({ message, color, textColor, marginTop, setError, animated }) => {
  const moveAnimation = new Animated.Value(0);

  useEffect(() => {
    setError(message);
    if (message && animated) {
      Animated.sequence([
        Animated.spring(moveAnimation, {
          toValue: 0,
          useNativeDriver: false,
        }),
        Animated.delay(4000),
        Animated.spring(moveAnimation, {
          toValue: -80,
          useNativeDriver: false,
        }),
      ]).start(() => {
        setError('');
      });
    }
    if (message && !animated) {
      Animated.spring(moveAnimation, {
        toValue: 80,
        useNativeDriver: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <Animated.View style={[styles.view, { top: moveAnimation }]}>
      <ErrorContainer color={color} marginTop={marginTop}>
        <ErrorText color={textColor}>{message}</ErrorText>
      </ErrorContainer>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  view: {
    zIndex: 1000,
    position: 'absolute',
    width: dim.width,
    display: 'flex',
    alignItems: 'center',
    left: 0,
  },
});

Error.defaultProps = {
  marginTop: 0,
  animated: false,
  textColor: '#fff',
  color: '#222',
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
  marginTop: PropTypes.number,
  setError: PropTypes.func.isRequired,
  animated: PropTypes.bool,
};

export default Error;
