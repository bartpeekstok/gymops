/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/aanbod", destination: "/aanbod/index.html" },
      { source: "/routekaart", destination: "/routekaart/index.html" },
      { source: "/routekaart/kaart", destination: "/routekaart/kaart.html" },
    ];
  },
};

module.exports = nextConfig;
