import { gql } from '@apollo/client';

export const CREATE_ORDER = gql`
  mutation createOrder(
    $details: String
    $order: [OrderDish!]
    $pickup: String
    $discount: String
    $creation: String
    $userId: ID
    $sourceId: ID!
    $card: String
    $price: String
  ) {
    createOrder(
      details: $details
      discount: $discount
      order: $order
      pickup: $pickup
      creation: $creation
      userId: $userId
      sourceId: $sourceId
      card: $card
      price: $price
    ) {
      id
      stripeMandateId
      stripeChargeId
    }
  }
`;

export const CANCEL_ORDER = gql`
  mutation cancelOrder($id: ID!) {
    cancelOrder(id: $id)
  }
`;
