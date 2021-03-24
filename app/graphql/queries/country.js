import { gql } from '@apollo/client';

const GET_COUNTRY = gql`
  {
    countries {
      id
      iso
      name
      code
    }
  }
`;
export default GET_COUNTRY;
