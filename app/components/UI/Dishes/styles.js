import styled from 'styled-components/native';

export const DishList = styled.FlatList`
  width: 100%;
  height: 100%;
`;

export const DishListContainer = styled.View`
  position: relative;
  width: 62%;
  height: 100%;
`;

export const DishImage = styled.Image`
  width: 60px;
  height: 60px;
  opacity: ${props => (props.focus ? 1 : 0.15)};
  border-radius: 5px;
`;

export const DishImageContainer = styled.TouchableOpacity.attrs(props => ({
  last: props.last,
}))`
  position: relative;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-right: ${props => `${props.last ? 20 : 10}px`};
`;

export const Quantity = styled.View.attrs(props => ({
  backgroundColor: props.backgroundColor,
  focus: props.focus,
}))`
  position: absolute;
  font-family: Roboto-Medium;
  bottom: 5px;
  right: -5px;
  background-color: ${props => props.backgroundColor};
  width: 20px;
  height: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.focus ? 1 : 0.15)};
`;

export const QuantityText = styled.Text.attrs(props => ({
  color: props.color,
}))`
  font-family: Roboto-Medium;
  color: ${props => props.color};
`;
