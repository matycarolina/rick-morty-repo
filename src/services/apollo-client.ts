import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
    ssrMode: false,
});
/* 
const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://rickandmortyapi.com/' }),
    fetchOptions: {
        mode: 'no-cors',
      },
    cache: new InMemoryCache()
  }); */

export default client;