/** @type {import('next').NextConfig} */
const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/static/index.html",
  //       permanent: true,
  //     },
  //   ];
  // },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    // removeConsole: true,
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/query",
  //       destination: "http://localhost:8090/query", // Proxy to Backend
  //     },
  //   ];
  // },
  rewrites: async () => {
    return [
      {
        source: "/query",
        destination: "http://localhost:8090/query", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
