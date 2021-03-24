import styled from 'styled-components/native';

export const ButtonText = styled.Text.attrs(props => ({
  color: props.color,
}))`
  color: ${props => props.color};
  font-weight: 700;
  font-size: 15px;
`;

export const ButtonStyled = styled.TouchableOpacity.attrs(props => ({
  color: props.color,
}))`
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  elevation: ${props => (props.disabled ? 0 : 2)};
  height: 44px;
  width: 100%;
  opacity: ${props => (props.disabled ? 0.33 : 1)};
  background-color: ${props => props.color};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
