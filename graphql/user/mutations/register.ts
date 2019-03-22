import gql from 'graphql-tag';

export const registerMutation = gql`
  mutation Register($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    register(
      data: { email: $email, password: $password, firstName: $firstName, lastName: $lastName }
    ) {
      id
      email
      firstName
      lastName
      fullName
    }
  }
`;
