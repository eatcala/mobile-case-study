import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { DIGITALOCEAN_SPACE_MENUS } from '../../../../env.json';
import {
  Bottom,
  DiscountDish,
  DishDescription,
  DishDetailsContainer,
  DishDiscountText,
  DishInfo,
  DishItem,
  DishItemDetails,
  DishItemPrice,
  DishItemsView,
  DishItemWithDetails,
  DishPicture,
  DishTitle,
  Edition,
  EditionText,
  FreeDish,
  FreeDishEuro,
  FreeDishText,
  NumberDish,
  PriceContainer,
  QuantityText,
  QuantityView,
  Separator,
  Top,
  Total,
  Unitary,
} from './styles';
import Quantity from './Quantity';

import { useUserDispatch, useUserState } from '../../../context';
import { getDishPrice } from '../../../../src/utils/orderPrice';

const DishDetails = ({
  discount,
  editable,
  dishGroups,
  selectedDishGroupIndex,
  setSelectedDishGroupIndex,
  navigation,
  displayQuantity,
  displayQuantityButton,
  displayPrice,
  displayNumberDish,
  displayPastaCooking,
}) => {
  const dispatch = useUserDispatch();
  const { pastaCookings } = useUserState();
  const [dishPrice, setDishPrice] = useState(6);
  const {
    index,
    name,
    custom,
    pastaCookingId,
    picture,
    backgroundColor: { hexa: backgroundColor },
    textColor: { hexa: textColor },
  } = dishGroups[selectedDishGroupIndex][0];

  const aliments = [...dishGroups[selectedDishGroupIndex][0].aliments];

  const editMenu = menu => {
    navigation.pop({
      action: navigation.replace('PersonalizeOrder', {
        selectedMenu: dishGroups[selectedDishGroupIndex],
      }),
    });
  };

  useEffect(() => {
    if (aliments) {
      const price = getDishPrice(aliments);
      setDishPrice(price);
    }
  }, [aliments]);

  const removeDish = () => {
    const isLast = dishGroups[selectedDishGroupIndex].length === 1;
    dispatch({ type: 'REMOVE_DISH_FROM_ORDER', payload: dishGroups[selectedDishGroupIndex][0] });
    if (isLast && setSelectedDishGroupIndex) {
      setSelectedDishGroupIndex(null);
    }
  };

  const addDish = () => {
    dispatch({ type: 'CLONE_DISH_INTO_ORDER', payload: dishGroups[selectedDishGroupIndex][0] });
  };

  const getPastaCookingName = () => {
    const foundPastaCooking = pastaCookings.find(
      pastaCooking => parseInt(pastaCooking.id, 10) === parseInt(pastaCookingId, 10),
    );
    return foundPastaCooking ? foundPastaCooking.name : '';
  };

  const getDishesPrice = () => {
    const price = dishGroups[selectedDishGroupIndex].length * dishPrice;

    if (Math.round(price) !== price) {
      return price.toFixed(2);
    }

    return price;
  };

  const displayDishesPrice = () => {
    if (displayPrice) {
      if (getDishesPrice() <= discount) {
        return (
          <PriceContainer>
            <FreeDish>
              <FreeDishText>OFFERT</FreeDishText>
            </FreeDish>
          </PriceContainer>
        );
      } else if (discount) {
        return (
          <PriceContainer>
            <Total>{`${getDishesPrice()}€`}</Total>
            <DiscountDish>
              <FreeDishEuro>6€ </FreeDishEuro>
              <DishDiscountText>OFFERTS</DishDiscountText>
            </DiscountDish>
          </PriceContainer>
        );
      } else {
        return (
          <PriceContainer>
            <Total>{`${getDishesPrice()}€`}</Total>
            {editable ? <Unitary>{`${dishPrice}€/menu`}</Unitary> : null}
          </PriceContainer>
        );
      }
    }
  };

  return (
    <View>
      <DishDetailsContainer>
        <DishPicture
          color={!custom ? backgroundColor : '#E0E0E0'}
          source={{ uri: `${DIGITALOCEAN_SPACE_MENUS}/${custom ? 'custom-dish.jpg' : picture}` }}
        />
        {displayQuantity ? (
          <QuantityView backgroundColor={backgroundColor}>
            <QuantityText color={textColor}>
              {dishGroups[selectedDishGroupIndex].length}
            </QuantityText>
          </QuantityView>
        ) : null}
        <DishInfo>
          <DishDescription>
            <Top>
              <DishTitle>{!custom ? name : 'La Custom '}</DishTitle>
              {displayDishesPrice()}
            </Top>

            <DishItemsView>
              {aliments
                .sort((first, second) => first.category.id - second.category.id)
                .map(aliment => {
                  if (parseInt(aliment.category.id, 10) === 1) {
                    return (
                      <DishItemWithDetails key={aliment.id}>
                        <DishItem>{aliment.name}</DishItem>
                        {displayPastaCooking ? (
                          <DishItemDetails>{getPastaCookingName()}</DishItemDetails>
                        ) : null}
                      </DishItemWithDetails>
                    );
                  }
                  if (displayPrice) {
                    return (
                      <DishItemWithDetails key={aliment.id}>
                        <DishItem>{aliment.name}</DishItem>
                        {aliment.price ? (
                          <DishItemPrice>{`${aliment.price} €`}</DishItemPrice>
                        ) : null}
                      </DishItemWithDetails>
                    );
                  }
                  return <DishItem key={aliment.id}>{aliment.name}</DishItem>;
                })}
              {displayNumberDish && <NumberDish>#{index}</NumberDish>}
            </DishItemsView>
          </DishDescription>
          <Bottom>
            {displayQuantityButton ? (
              <Quantity
                disabled={getDishesPrice() === discount}
                quantity={dishGroups[selectedDishGroupIndex].length}
                removeDish={removeDish}
                addDish={addDish}
              />
            ) : null}
            {editable ? (
              <Edition onPress={() => editMenu(dishGroups[selectedDishGroupIndex][0])}>
                <EditionText>Modifier</EditionText>
              </Edition>
            ) : null}
          </Bottom>
        </DishInfo>
      </DishDetailsContainer>
      <Separator />
    </View>
  );
};

DishDetails.defaultProps = {
  displayPastaCooking: false,
  displayNumberDish: false,
  displayQuantity: false,
  displayPrice: false,
  displayQuantityButton: true,
  setSelectedDishGroupIndex: undefined,
  discount: 0,
  navigation: undefined,
};

DishDetails.propTypes = {
  discount: PropTypes.number,
  editable: PropTypes.bool.isRequired,
  dishGroups: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        index: PropTypes.number,
        name: PropTypes.string,
        custom: PropTypes.bool,
        aliments: PropTypes.arrayOf(PropTypes.shape({})),
        pastaCookingId: PropTypes.string,
        picture: PropTypes.string,
        backgroundColor: PropTypes.shape({
          hexa: PropTypes.string,
        }),
        textColor: PropTypes.shape({
          hexa: PropTypes.string,
        }),
        free: PropTypes.bool,
      }),
    ),
  ).isRequired,
  selectedDishGroupIndex: PropTypes.number.isRequired,
  setSelectedDishGroupIndex: PropTypes.func,
  navigation: PropTypes.shape({
    replace: PropTypes.func,
    pop: PropTypes.func,
  }),
  displayQuantity: PropTypes.bool,
  displayPrice: PropTypes.bool,
  displayNumberDish: PropTypes.bool,
  displayPastaCooking: PropTypes.bool,
  displayQuantityButton: PropTypes.bool,
};

export default DishDetails;
