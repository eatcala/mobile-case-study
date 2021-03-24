import styled from 'styled-components/native';

export const DishDetailsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 20px 0;
`;

export const DishPicture = styled.Image.attrs(props => ({
  color: props.color,
}))`
  width: 145px;
  height: 145px;
  border-radius: 20px;
  background-color: ${props => props.color};
`;

export const DishInfo = styled.View`
  margin-left: 20px;
  flex: 1;
  justify-content: space-between;
`;

export const DishDescription = styled.View`
  font-family: Roboto;
`;

export const DishTitle = styled.Text`
  font-family: Roboto;
  font-weight: 700;
  font-size: 17px;
  color: #bdbdbd;
  text-transform: capitalize;
  margin-bottom: 14px;
  width: 63%;
`;

export const DishItem = styled.Text`
  font-family: Roboto;
  font-size: 13px;
  color: #bdbdbd;
`;

export const DishItemWithDetails = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const DishItemDetails = styled.Text`
  font-family: Roboto;
  font-size: 13px;
  line-height: 13px;
  font-style: italic;
  color: #828282;
  margin-left: 7px;
`;

export const DishItemPrice = styled.Text`
  color: ${props => props.theme.colors.green};
  margin-left: 8px;
  margin-bottom: -0.1px;
  font-size: 13px;
  font-family: Roboto;
`;

export const WithoutDrink = styled.Text`
  color: #4f4f4f;
`;

export const Bottom = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Top = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const PriceContainer = styled.View`
  align-items: flex-end;
`;

export const Total = styled.Text`
  font-size: 16px;
  color: #828282;
  font-weight: 700;
  font-family: Roboto;
`;

export const Unitary = styled.Text`
  font-size: 11px;
  color: #4f4f4f;
`;

export const Edition = styled.TouchableOpacity`
  color: #828282;
`;

export const EditionText = styled.Text`
  color: #828282;
`;

export const DiscountDish = styled.View`
  display: flex;
  flex-direction: row;
`;
export const FreeDishEuro = styled.Text`
  color: #ffef5f;
  font-family: Roboto;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const FreeDish = styled.View`
  height: 22px;
  border-radius: 11px;
  background-color: ${props => props.theme.colors.green};
  justify-content: center;
  align-items: center;
`;

export const FreeDishText = styled.Text`
  padding: 0 10px;
  color: ${props => props.theme.colors.yellow};
  font-weight: 700;
  font-size: 11px;
  line-height: 23px;
`;

export const DishDiscountText = styled.Text`
  color: #ffef5f;
  font-family: Roboto;
  font-weight: 500;
  font-size: 11px;
  line-height: 22px;
`;

export const QuantityView = styled.View.attrs(props => ({
  backgroundColor: props.backgroundColor,
  focus: props.focus,
}))`
  position: absolute;
  font-family: Roboto-Medium;
  top: 14px;
  left: ${`${145 - 18}px`};
  background-color: ${props => props.backgroundColor};
  width: 28px;
  height: 28px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  elevation: 6;
`;

export const QuantityText = styled.Text.attrs(props => ({
  color: props.color,
}))`
  font-family: Roboto-Medium;
  color: ${props => props.color};
  font-size: 18px;
`;

export const NumberDish = styled.Text`
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: #4f4f4f;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const DrinkAndNumberDish = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #333;
`;

export const DishItemsView = styled.View`
  position: relative;
  display: flex;
`;
