import React from 'react';
import { ButtonText, ButtonStyled } from './styles';

const RegularButton = ({ text, color, textColor, disable, onPress }) => {
  return (
    <ButtonStyled disabled={disable} color={color} onPress={onPress}>
      <ButtonText color={textColor}>{text}</ButtonText>
    </ButtonStyled>
  );
};

export default RegularButton;
