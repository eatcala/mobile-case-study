import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const MainView = styled.View`
  background-color: ${props => props.theme.colors.black};
  padding-top: ${props =>
    `${Platform.OS === 'ios' ? props.theme.ios.spacing : props.theme.spacing * 3}px`};
  position: relative;
  flex: 1;
`;

export const WebViewDesign = styled.View`
  flex: 1;
`;

export const BackNavigationView = styled.View`
  padding-left: ${props => `${props.theme.spacing}px`};
`;
