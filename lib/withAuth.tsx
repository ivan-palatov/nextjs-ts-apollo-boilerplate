import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { NextContext } from 'next';
import React from 'react';
import { MeQuery } from '../generated/apolloComponents';
import { meQuery } from '../graphql/user/queries/me';
import redirect from './redirect';

export interface INextContextWithApollo extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
  githubApolloClient: ApolloClient<NormalizedCacheObject>;
}

export const withAuth = <T extends object>(C: React.ComponentClass<T, any>) => {
  return class AuthComponent extends React.Component<T> {
    static async getInitialProps({ apolloClient, ...ctx }: INextContextWithApollo) {
      const response = await apolloClient.query<MeQuery>({ query: meQuery });
      if (!response || !response.data || !response.data.me) {
        redirect(ctx, '/login');
        return {
          me: null,
        };
      }
      return {
        me: response.data.me,
      };
    }

    render() {
      return <C {...this.props} />;
    }
  };
};
