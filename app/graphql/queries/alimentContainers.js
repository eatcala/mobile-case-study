import { gql } from '@apollo/client';

const GET_AVAILABLE_ALIMENTS = gql`
  {
    availableAlimentContainers {
      id
      quantity
      aliment {
        id
        name
        description
        picture
        preview
        category {
          id
          name
        }
        vegan
        vegetarian
        bio
        local
        price
        pastaCookings {
          id
          name
          default
        }
        allergies {
          id
        }
      }
    }
  }
`;

export default GET_AVAILABLE_ALIMENTS;
