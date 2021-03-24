import React from 'react';

import RedCloseSVG from '../../../../src/img/red-close.svg';
import YellowCloseSVG from '../../../../src/img/yellow-close.svg';
import GreenCloseSVG from '../../../../src/img/green-close.svg';
import WhiteCloseSVG from '../../../../src/img/close.svg';

import theme from '../../../../src/styles';
import { CloseStyled, CloseContainer } from './styles';

const CloseNavigation = ({ color, onPress, disabled }) => {
  const getColoredSVG = () => {
    switch (color) {
      case 'red':
        return <RedCloseSVG style={theme.navigation.close} />;
      case 'yellow':
        return <YellowCloseSVG style={theme.navigation.close} />;
      case 'green':
        return <GreenCloseSVG style={theme.navigation.close} />;
      case 'white':
        return <WhiteCloseSVG style={theme.navigation.close} />;
    }
  };

  return (
    <CloseStyled>
      <CloseContainer disabled={disabled} onPress={() => onPress()}>
        {getColoredSVG()}
      </CloseContainer>
    </CloseStyled>
  );
};

export default CloseNavigation;
