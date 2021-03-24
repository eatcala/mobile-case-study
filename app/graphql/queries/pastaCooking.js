import { gql } from '@apollo/client';

const GET_PASTA_COOKINGS = gql`
  {
    pastaCookings {
      id
      name
    }
  }
`;

export default GET_PASTA_COOKINGS;
