/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['mir-s3-cdn-cf.behance.net'], 
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  }, images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

