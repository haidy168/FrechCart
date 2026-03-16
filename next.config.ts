/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactCompiler: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecommerce.routemisr.com',
        pathname: '/**',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/allorders",
        destination: "/orders",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;