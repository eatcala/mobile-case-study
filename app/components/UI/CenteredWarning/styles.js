import styled from 'styled-components/native';

export const Centerer = styled.View`
  flex: 1 1 auto;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Warning = styled.View`
  align-items: center;
  margin-top: -25%;
  width: 80%;
  font-family: Roboto;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 27px;
  color: white;
  margin-bottom: 18px;
`;

export const Description = styled.Text`
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #bdbdbd;
  text-align: center;
  margin-bottom: 30px;
`;

export const CTA = styled.Text`
  font-weight: 400;
  font-size: 15px;
  color: #ffef5f;
`;
