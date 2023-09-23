/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotepatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  redirects: async () => {
    return [
      // {
      //   source: "/home" || "/",
      //   destination: "/",
      //   has: [{ type: "cookie", key: "__session", value: "" }],
      //   permanent: false,
      // },
      {
        source: "/" || "/sign-in" || "/sign-up",
        destination: "/home",
        has: [{ type: "cookie", key: "__session" }],
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
