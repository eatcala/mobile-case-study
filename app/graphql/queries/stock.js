import { gql } from '@apollo/client';

const GET_ALIMENTS = gql`
  {
    dailyStock {
      aliment {
        id
        name
        description
        picture
        preview
        alimentCategoryId
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

export default GET_ALIMENTS;
