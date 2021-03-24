import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { FlatList } from 'react-native';

import Separator from './styles';
import DishDetails from '../../../UI/DishDetails';

import GET_AVAILABLE_ALIMENTS from '../../../../graphql/queries/alimentContainers';

import { getOrderGroupedByMenus } from '../../../../../src/utils/dishFinder';

import { useUserDispatch, useUserState } from '../../../../context';

const DishList = ({ order, navigation }) => {
  const dispatch = useUserDispatch();
  const [orderGroupedByMenus, setOrderGroupedByMenus] = useState([]);
  const { isUserNew } = useUserState();

  useQuery(GET_AVAILABLE_ALIMENTS, {
    fetchPolicy: 'network-only',
    onCompleted({ availableAlimentContainers }) {
      dispatch({ type: 'SET_ALIMENTS', payload: availableAlimentContainers });
    },
    onError(err) {
      console.log('GET_ALIMENTS error', err);
    },
  });

  useEffect(() => {
    if (order.length !== 0) {
      setOrderGroupedByMenus(getOrderGroupedByMenus(order));
    } else {
      navigation.navigate('MenuSelection');
    }
  }, [navigation, order]);

  const updateQuantity = (index, newQuantity) => {
    dispatch({
      type: 'UPDATE_ORDER_QUANTITY',
      payload: { index, quantity: newQuantity },
    });
  };

  return (
    <FlatList
      data={orderGroupedByMenus}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <DishDetails
            discount={index === 0 && isUserNew ? 6 : 0}
            dishGroups={orderGroupedByMenus}
            selectedDishGroupIndex={index}
            dish={item.dish}
            quantity={item.quantity}
            custom={item.custom}
            index={item.index}
            navigation={navigation}
            updateQuantity={(itemIndex, newQuantity) => updateQuantity(itemIndex, newQuantity)}
            editable
            displayPrice
            displayPastaCooking
          />
        );
      }}
      keyExtractor={(item, index) => `${item.id}-${index.toString()}`}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
};

DishList.defaultProps = {
  order: null,
};

DishList.propTypes = {
  order: PropTypes.arrayOf(PropTypes.shape({})),
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default DishList;
