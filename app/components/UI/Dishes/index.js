import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DIGITALOCEAN_SPACE_MENUS } from '../../../../env.json';

import {
  DishImageContainer,
  DishListContainer,
  DishImage,
  DishList,
  Quantity,
  QuantityText,
} from './styles';

const styles = StyleSheet.create({
  linearGradient: {
    width: '15%',
    position: 'absolute',
    height: '100%',
    top: 0,
    right: 0,
  },
});

const Dishes = ({ action, dishGroups, selectedDishGroupIndex }) => {
  const CUSTOM_TEXT_COLOR = '#000';
  const CUSTOM_BACKGROUND_COLOR = '#cacaca';

  const renderDish = ({ item: dishGroup, index }) => {
    const dish = dishGroup[0];
    if (dish) {
      return (
        <DishImageContainer last={false} onPress={() => action(index)}>
          <DishImage
            focus={selectedDishGroupIndex === null || index === selectedDishGroupIndex}
            source={{
              uri: `${DIGITALOCEAN_SPACE_MENUS}/${dish.custom ? 'custom-dish.jpg' : dish.picture}`,
            }}
          />
          <Quantity
            focus={selectedDishGroupIndex === null || index === selectedDishGroupIndex}
            backgroundColor={dish.custom ? CUSTOM_BACKGROUND_COLOR : dish.backgroundColor.hexa}>
            <QuantityText color={dish.custom ? CUSTOM_TEXT_COLOR : dish.textColor.hexa}>
              {dishGroup.length}
            </QuantityText>
          </Quantity>
        </DishImageContainer>
      );
    }
  };

  return (
    <DishListContainer>
      {dishGroups ? (
        <DishList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={dishGroups}
          renderItem={renderDish}
        />
      ) : null}
      <LinearGradient
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['rgba(34,34,34,0)', 'rgba(34,34,34,1)']}
      />
    </DishListContainer>
  );
};

export default Dishes;
