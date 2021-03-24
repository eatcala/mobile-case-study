import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { isIphoneX } from '../../../../src/utils/isIphoneX';

export const MainView = styled.View`
  background-color: ${props => props.theme.colors.black};
  padding: ${props => `${props.theme.spacing}px`};
  padding-top: ${props =>
    `${Platform.OS === 'ios' ? props.theme.ios.spacing : props.theme.spacing * 3}px`};
  position: relative;
  flex: 1;
`;

export const TitleAndSlot = styled.View.attrs(props => ({
  noPaddingBottom: props.noPaddingBottom,
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: ${props => `${props.noPaddingBottom ? 10 : props.theme.title.marginBottom}px`};
`;

export const Title = styled.Text`
  color: ${props => props.theme.colors.whiteLight};
  font-size: ${props => `${props.theme.title.fontSize}px`};
  font-family: ${props => props.theme.title.fontFamily};
  font-weight: ${props => props.theme.title.fontWeight};
  line-height: ${props => `${props.theme.title.fontSize}px`};
`;

export const Border = styled.View.attrs(props => ({
  width: props.width,
}))`
  width: ${props => `${props.width}px`};
  height: 1.5px;
  background-color: #4f4f4f;
  margin-left: ${props => `${props.theme.spacing * -1}px`};
  margin-right: ${props => `${props.theme.spacing * -1}px`};
`;

export const ButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 11px;
  margin-bottom: ${() => `${isIphoneX() ? 20 : 0}px`};
  background-color: transparent;
`;

export const ButtonSlot = styled.TouchableOpacity`
  margin-bottom: 1%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: ${props => `${props.theme.title.fontSize}px`};
`;

export const TextSlot = styled.Text`
  color: ${props => props.theme.colors.yellow};
  font-size: 19px;
  line-height: 22px;
  font-family: Roboto-Medium;
  margin-left: 8px;
`;

export const ButtonCard = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

export const TextCard = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 15px;
  font-family: ${props => props.theme.title.fontFamily};
`;
