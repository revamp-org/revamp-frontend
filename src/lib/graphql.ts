import { ApolloClient, InMemoryCache } from "@apollo/client";

const gqlClient = new ApolloClient({
	uri: "https://graphqlzero.almansi.me/api",
	cache: new InMemoryCache(),
});

export default gqlClient;
