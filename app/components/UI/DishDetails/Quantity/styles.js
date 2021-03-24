import styled from 'styled-components/native';

export const QuantityContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-left: -10px;
`;

export const QuantityNumberText = styled.Text`
  font-size: 15px;
  color: #bdbdbd;
  font-weight: 700;
  margin: 0 5px;
  margin-bottom: 1px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const QuantityNumber = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
`;

export const OperatorButton = styled.TouchableOpacity`
  padding: 10px 10px 0 10px;
`;
