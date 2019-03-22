import gql from 'graphql-tag';

export const confirmEmail = gql`
  mutation ConfirmEmail($token: String!) {
    confirmEmail(token: $token) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
