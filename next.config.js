/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/routekaart", destination: "/routekaart/index.html" },
      { source: "/routekaart/kaart", destination: "/routekaart/kaart.html" },
    ];
  },
};

module.exports = nextConfig;
