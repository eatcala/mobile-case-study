import { gql } from '@apollo/client';

const GET_ROBOT_CONFIG = gql`
  {
    robotConfig {
      maintenance
      serviceEnd
      serviceStart
    }
  }
`;
export default GET_ROBOT_CONFIG;
