import { gql } from '@apollo/client';

const GET_MENUS = gql`
  {
    dailyMenus {
      id
      name
      description
      picture
      pastaCookingId
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
      backgroundColor {
        id
        hexa
      }
      textColor {
        id
        hexa
      }
      openingDay
    }
  }
`;

export default GET_MENUS;
