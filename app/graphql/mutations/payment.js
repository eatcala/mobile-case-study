import { gql } from '@apollo/client';

export const USER_DELETE_CARD = gql`
  mutation deleteCard($userId: ID!, $cardId: String!) {
    deleteCard(userId: $userId, cardId: $cardId)
  }
`;
export const USER_ADD_CARD = gql`
  mutation addCard($id: ID!, $stripeToken: String!) {
    addCard(id: $id, stripeToken: $stripeToken) {
      last4
      brand
      exp_year
      exp_month
      id
    }
  }
`;
