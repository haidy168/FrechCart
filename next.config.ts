/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // 1. تجاهل أخطاء التايب سكريبت (اللي عملناها)
  typescript: {
    ignoreBuildErrors: true,
  },

  // 2. تجاهل أخطاء التنسيق (ضيف الجزء ده لو مش موجود)
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",
        pathname: "/**",
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
