import styled from 'styled-components/native';

const Circle = styled.View.attrs(props => ({
  selected: props.selected,
  borderRadius: props.borderRadius,
}))`
  width: 18px;
  height: 18px;
  border-radius: ${props => `${props.borderRadius}px`};
  border: ${props => (props.selected ? '1px solid #0C9266' : '1px solid #808080')};
  align-items: center;
  margin-left: auto;
  background-color: ${props => (props.selected ? '#0C9266' : 'transparent')};
`;

export default Circle;
