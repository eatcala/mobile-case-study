import styled from 'styled-components/native';
import { getNotchMargin } from '../../../../src/utils/phoneDimensions';

export const ErrorText = styled.Text`
  color: ${props => props.color};
`;

export const ErrorContainer = styled.View`
  background-color: ${props => props.color};
  border-radius: 15px;
  padding: 5px 15px;
  margin-top: ${`${getNotchMargin() + 5}px`};
`;
