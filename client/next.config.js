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
};

module.exports = nextConfig;
