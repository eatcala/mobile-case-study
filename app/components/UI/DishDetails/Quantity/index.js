import React from 'react';
import { StyleSheet } from 'react-native';

import Trash from '../../../../../src/img/trash.svg';
import Minus from '../../../../../src/img/minus.svg';
import Add from '../../../../../src/img/add.svg';

import { QuantityContainer, OperatorButton, QuantityNumber, QuantityNumberText } from './styles';


const styles = StyleSheet.create({
  operator: {
    width: 20,
    height: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  trash: {
    width: 17,
    height: 17,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 1,
  },
});

const Quantity = ({ quantity, disabled, addDish, removeDish }) => { 
  return (
    <QuantityContainer>
      <OperatorButton onPress={() => removeDish()}>
        {quantity > 1 ? <Minus style={styles.operator} /> : <Trash style={styles.trash} />}
      </OperatorButton>
      <QuantityNumber>
        <QuantityNumberText>{quantity}</QuantityNumberText>
      </QuantityNumber>
      <OperatorButton disabled={disabled} onPress={() => addDish()}>
        <Add style={[styles.operator, { opacity: disabled ? 0.25 : 1 }]} />
      </OperatorButton>
    </QuantityContainer>
  );
};

export default Quantity;
