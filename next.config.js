/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
  },
  images: {
    domains: ["assets.coingecko.com", "images.dog.ceo"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
