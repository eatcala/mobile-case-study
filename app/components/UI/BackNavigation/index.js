import React from 'react';

import RedLeftSVG from '../../../../src/img/red-back.svg';
import YellowLeftSVG from '../../../../src/img/yellow-back.svg';
import GreenLeftSVG from '../../../../src/img/green-back.svg';
import WhiteLeftSVG from '../../../../src/img/back-white.svg';
import GreyLeftSVG from '../../../../src/img/back-grey.svg';

import WhiteBottomSVG from '../../../../src/img/fleche-pays.svg';

import { ButtonStyled, ButtonContainer } from './styles';
import theme from '../../../../src/styles';

const BackNavigation = ({ color, direction, onPress, disabled }) => {
  const getSVG = () => {
    switch (direction) {
      case 'left':
        return getLeftIcon();
      case 'bottom':
        return getBottomIcon();
    }
  };

  const getBottomIcon = () => {
    switch (color) {
      case 'white':
        return <WhiteBottomSVG style={theme.navigation.back} />;
    }
  };

  const getLeftIcon = () => {
    switch (color) {
      case 'red':
        return <RedLeftSVG style={theme.navigation.back} />;
      case 'yellow':
        return <YellowLeftSVG style={theme.navigation.back} />;
      case 'green':
        return <GreenLeftSVG style={theme.navigation.back} />;
      case 'white':
        return <WhiteLeftSVG style={theme.navigation.back} />;
      case 'grey':
        return <GreyLeftSVG style={theme.navigation.back} />;
    }
  };

  return (
    <ButtonStyled>
      <ButtonContainer disabled={disabled} onPress={() => onPress()}>
        {getSVG()}
      </ButtonContainer>
    </ButtonStyled>
  );
};

export default BackNavigation;
