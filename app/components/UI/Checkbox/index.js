import React from 'react';
import { StyleSheet, View } from 'react-native';
import Circle from './styles';
import ValidateIcon from '../../../../src/img/validate.svg';

const styles = StyleSheet.create({
  validate: {
    height: 11,
    width: 11,
    alignItems: 'center',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
});

const Checkbox = ({ selected, borderRadius }) => {
  return (
    <Circle selected={selected} borderRadius={borderRadius}>
      {selected ? <ValidateIcon style={styles.validate} /> : <View />}
    </Circle>
  );
};
export default Checkbox;
