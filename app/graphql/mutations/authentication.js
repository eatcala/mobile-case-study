import { gql } from '@apollo/client';

export const USER_PHONE_NUMBER = gql`
  mutation phone($deviceId: String, $phoneNumber: String!, $countryId: ID!) {
    phone(deviceId: $deviceId, phoneNumber: $phoneNumber, countryId: $countryId)
  }
`;

export const USER_EMAIL = gql`
  mutation email($phoneNumber: String!, $email: String!) {
    email(phoneNumber: $phoneNumber, email: $email)
  }
`;

export const USER_CODE = gql`
  mutation code($phoneNumber: String!, $code: String!) {
    code(phoneNumber: $phoneNumber, code: $code) {
      timestamp
      token
    }
  }
`;
