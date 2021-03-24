import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonStyled } from './styles';

import RedArrow from '../../../../src/img/red-arrow.svg';
import YellowArrow from '../../../../src/img/yellow-arrow.svg';
import GreenArrow from '../../../../src/img/green-arrow.svg';

const styles = StyleSheet.create({
  svg: {
    height: '12.61px',
    width: '16.33px',
  },
});

const TinyButton = ({ text, color, textColor, arrowColor, disable, onPress }) => {
  const getArrow = () => {
    switch (arrowColor) {
      case 'red':
        return <RedArrow style={styles.svg} />;
      case 'yellow':
        return <YellowArrow style={styles.svg} />;
      case 'green':
        return <GreenArrow style={styles.svg} />;
    }
  };

  return (
    <ButtonStyled disabled={disable} color={color} onPress={onPress}>
      {getArrow()}
    </ButtonStyled>
  );
};

export default TinyButton;
