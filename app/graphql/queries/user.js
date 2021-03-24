import { gql } from '@apollo/client';

export const GET_USER = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      phoneNumber
      allergies {
        allergy {
          id
        }
      }
      orders {
        price
        card {
          brand
          last4
          exp_month
          exp_year
        }
        creation
        dishes {
          index
          pastaCooking {
            name
            id
          }
          id
          backgroundColor {
            hexa
          }
          textColor {
            hexa
          }
          name
          picture
          dishAliments {
            alimentId
            alimentCategoryId
            aliment {
              id
              name
              alimentCategoryId
            }
          }
        }
        status {
          id
          name
          color
        }
        id
      }
    }
  }
`;

export const GET_USER_DETAILS = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      email
      firstName
      phoneNumber
    }
  }
`;

export const GET_USER_INFORMATION = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      firstName
      isUserNew
    }
  }
`;

export const GET_USER_ORDERS = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      orders {
        id
        discount
        price
        pickup
        creation
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
        card {
          brand
          last4
          exp_month
          exp_year
        }
        status {
          id
          name
          color
        }
      }
    }
  }
`;

export const GET_USER_ALLERGIES = gql`
  query($id: ID!) {
    user(id: $id) {
      id
      allergies {
        allergy {
          id
        }
      }
    }
  }
`;
