import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "https://revamp-backend.onrender.com/graphql",
	documents: "src/graphql/*",
	generates: {
		"src/generated/graphql.ts": {
			plugins: ["typescript", "typescript-resolvers"],
		},
	},
};

export default config;
