// frontend/src/apollo/client.js (or client.ts)
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Dynamic URI based on environment
const getGraphQLUri = () => {
  if (import.meta.env.MODE === 'development') {
    return import.meta.env.VITE_GRAPHQL_URI || 'http://localhost:4000/graphql';
  }
  // Production - your deployed backend
  return import.meta.env.VITE_GRAPHQL_URI || 'https://book-lister-backend-p1ro.vercel.app/graphql';
};

const httpLink = createHttpLink({
  uri: getGraphQLUri(),
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;