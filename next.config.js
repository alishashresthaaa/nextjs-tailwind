/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true, layoutRaw: true } },
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
    // formats: ["image/eps"],
  },
};

module.exports = nextConfig;
