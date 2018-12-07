// import { graphql, buildSchema } from 'graphql';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider as Provider } from 'react-apollo';

// // Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

const client: ApolloClient<{}> = new ApolloClient({
  link: new HttpLink({ uri: process.env.TAKESHAPE_API_URL }),
  cache: new InMemoryCache()
});

const ApolloProvider: React.FunctionComponent = ({ children: React.ReactNode }): React.ReactElement<
  React.ReactNode => <Provider client={client} children={children} />;

export { ApolloProvider };
