import { gql } from '@apollo/client';

const GET_CARDS = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      cards {
        id
        last4
        exp_year
        exp_month
        brand
      }
    }
  }
`;
export default GET_CARDS;
