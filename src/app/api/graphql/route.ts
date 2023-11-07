import { createSchema, createYoga } from "graphql-yoga";
import { auth } from "@clerk/nextjs";

const { handleRequest } = createYoga({
	schema: createSchema({
		typeDefs: /* GraphQL */ `
			type Query {
				greetings: String
			}
		`,
		resolvers: {
			Query: {
				greetings: () => {
					const { userId } = auth();
					if (!userId) {
						return "You are unauthorized";
					}

					return JSON.stringify({ userId, message: "Hello, world", info: "idk" });
				},
			},
		},
	}),

	// While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
	graphqlEndpoint: "/api/graphql",

	// Yoga needs to know how to create a valid Next response
	fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS };
