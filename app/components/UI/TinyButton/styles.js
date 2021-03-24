import styled from 'styled-components/native';

export const ButtonStyled = styled.TouchableOpacity.attrs(props => ({
  color: props.color,
}))`
  box-shadow: ${props => (props.disabled ? 'none' : '0px 0px 5px rgba(0, 0, 0, 0.2)')};
  elevation: ${props => (props.disabled ? 0 : 2)};
  height: 44px;
  width: 53.5px;
  opacity: ${props => (props.disabled ? 0.33 : 1)};
  background-color: ${props => props.color};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default ButtonStyled;
