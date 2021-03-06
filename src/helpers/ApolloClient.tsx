import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient as Client } from 'apollo-client';
import { ApolloLink, GraphQLRequest } from 'apollo-link';
import { ContextSetter, setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

const authLink: ApolloLink = setContext(
  (operation: GraphQLRequest, prevContext: any): any => ({
    headers: {
      ...prevContext.headers,
      authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`
    }
  })
);

const httpLink: ApolloLink = createHttpLink({
  uri: process.env.TAKESHAPE_API_URL
});

const ApolloClient: Client<{}> = new Client({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export { ApolloClient };
