import gql from 'graphql-tag';

export const changePasswordMutation = gql`
  mutation ChangePassword($token: String!, $password: String!) {
    changePassword(data: { token: $token, password: $password }) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
