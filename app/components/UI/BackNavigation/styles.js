import styled from 'styled-components/native';

export const ButtonStyled = styled.View`
  width: 100%;
  height: ${props => `${props.theme.navigation.close.height}px`};
  margin-bottom: ${props => `${props.theme.navigation.margin + props.theme.navigation.padding}px`};
  margin-left: ${props => `${props.theme.navigation.padding * -1}px`};
  margin-top: ${props => `${props.theme.navigation.padding * -1}px`};
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: ${props => `${props.theme.navigation.close.width * 3}px`};
  padding-bottom: ${props => `${props.theme.navigation.margin}px`};
  padding-left: ${props => `${props.theme.navigation.padding}px`};
  padding-top: ${props => `${props.theme.navigation.padding}px`};
`;
