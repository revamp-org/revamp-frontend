"use client";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useSession } from "@clerk/nextjs";

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
	const { session } = useSession();
	console.log("session", session?.id);
	const httpLink = createHttpLink({
		uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URI,
	});

	const authLink = setContext((_, { headers }) => {
		return {
			headers: {
				...headers,

				authorization: session ? `Bearer ${session.id}` : "",
			},
		};
	});
	const gqlClient = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache(),
	});
	return <ApolloProvider client={gqlClient}> {children}</ApolloProvider>;
};

export default ApolloClientProvider;
