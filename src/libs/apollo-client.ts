import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

let client: ApolloClient<any> | null = null;

/**
 * getApolloClient
 */
export function getApolloClient(): ApolloClient<any> {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */
function _createApolloClient(): ApolloClient<any> {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.WORDPRESS_GRAPHQL_ENDPOINT as string,
    }),
    cache: new InMemoryCache(),
  });
}
