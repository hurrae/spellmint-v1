/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/static/index.html",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    // removeConsole: true,
  },
};

module.exports = nextConfig;
