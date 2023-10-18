/** @type {import('next').NextConfig} */
const nextConfig = {
	redirects: async () => {
		return [
			{
				source: "/sign-in" || "/sign-up",
				destination: "/",
				has: [{ type: "cookie", key: "__session" }],
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
