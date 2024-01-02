import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	schema: "https://api.revampgoal.co/graphql",
	documents: "src/graphql/*",
	generates: {
		"src/generated/graphql.ts": {
			plugins: ["typescript", "typescript-resolvers"],
		},
	},
};

export default config;
