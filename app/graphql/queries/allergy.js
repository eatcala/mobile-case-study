import { gql } from '@apollo/client';

const GET_ALLERGIES = gql`
  {
    allergies {
      id
      name
      picture
    }
  }
`;
export default GET_ALLERGIES;
