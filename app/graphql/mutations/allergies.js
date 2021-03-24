import { gql } from '@apollo/client';

const ADD_ALLERGIES = gql`
  mutation updateUserAllergies($userId: ID, $newUserAllergies: [ID]) {
    updateUserAllergies(userId: $userId, newUserAllergies: $newUserAllergies) {
      allergy {
        id
      }
    }
  }
`;
export default ADD_ALLERGIES;
