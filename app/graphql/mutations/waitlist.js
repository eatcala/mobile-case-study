import { gql } from '@apollo/client';

const WAITLIST_SIGNUP = gql`
  mutation createWaitlistAccount($phoneNumber: String!, $countryId: ID, $deviceId: String) {
    createWaitlistAccount(phoneNumber: $phoneNumber, countryId: $countryId, deviceId: $deviceId)
  }
`;
export default WAITLIST_SIGNUP;
