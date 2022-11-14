/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental:{appDir: true},
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/media/**',
      },
    ],
  },
}

module.exports = nextConfig
