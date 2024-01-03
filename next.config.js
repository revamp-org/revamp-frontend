/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(graphql|gql)/,
			exclude: /node_modules/,
			loader: "graphql-tag/loader",
		});

		return config;
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.postimg.cc",
				port: "",
				pathname: "/*/**",
			},
		],
	},

	output: "standalone",
};

module.exports = nextConfig;


