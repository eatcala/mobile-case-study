import { gql } from '@apollo/client';

export const UPDATE_USER_FIRSTNAME = gql`
  mutation updateUserFirstName($id: ID!, $firstName: String) {
    updateUserFirstName(id: $id, firstName: $firstName)
  }
`;

export const UPDATE_USER_EMAIL = gql`
  mutation email($phoneNumber: String!, $email: String!) {
    email(phoneNumber: $phoneNumber, email: $email)
  }
`;

export const UPDATE_USER_PHONE_NUMBER = gql`
  mutation updatePhoneNumber($id: ID!, $phoneNumber: String!, $countryId: ID!) {
    updatePhoneNumber(id: $id, phoneNumber: $phoneNumber, countryId: $countryId)
  }
`;

export const UPDATE_USER_PHONE_NUMBER_CODE = gql`
  mutation updatePhoneNumberCode($id: ID!, $phoneNumber: String!, $countryId: ID!, $code: String!) {
    updatePhoneNumberCode(id: $id, phoneNumber: $phoneNumber, countryId: $countryId, code: $code) {
      token
      timestamp
    }
  }
`;
