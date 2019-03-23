import { ApolloClient, NormalizedCacheObject } from 'apollo-boost';
import { NextContext } from 'next';

export interface IMyContext extends NextContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
