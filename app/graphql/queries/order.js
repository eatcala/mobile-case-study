import { gql } from '@apollo/client';

export const GET_SLOTS = gql`
  query {
    slots {
      id
      start
      end
      available
    }
  }
`;

export const GET_AVAILABLE_SLOTS = gql`
  query {
    availableSlots {
      start
      end
    }
  }
`;

export const GET_CURRENT_ORDER_PICKUP = gql`
  query($userId: ID!, $orderId: ID) {
    lastCurrentUserOrder(userId: $userId, orderId: $orderId) {
      id
      pickup
      status(limit: 5) {
        id
        name
        color
      }
    }
  }
`;

export const GET_CURRENT_ORDER = gql`
  query($userId: ID!, $orderId: ID) {
    lastCurrentUserOrder(userId: $userId, orderId: $orderId) {
      id
      pickup
      dishes {
        id
        index
        name
        picture
        pastaCooking {
          name
          id
        }
        backgroundColor {
          hexa
        }
        textColor {
          hexa
        }
        aliments {
          id
          name
          picture
          price
          category {
            id
            name
          }
        }
      }
      status(limit: 5) {
        id
        name
        color
      }
    }
  }
`;
