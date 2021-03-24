import { gql } from '@apollo/client';

const IS_USER_HAS_ACCESS = gql`
  query($phoneNumber: String!) {
    isUserHasAccess(phoneNumber: $phoneNumber)
  }
`;
export default IS_USER_HAS_ACCESS;
