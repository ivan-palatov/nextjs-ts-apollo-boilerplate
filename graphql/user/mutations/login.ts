import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
