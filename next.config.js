const sm = require("./sm");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/admin",
        destination: new URL(sm.apiEndpoint).origin,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
