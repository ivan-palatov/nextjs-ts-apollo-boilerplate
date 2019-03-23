import gql from 'graphql-tag';

export const meQuery = gql`
  query Me {
    me {
      id
      email
      fullName
      firstName
      lastName
    }
  }
`;
