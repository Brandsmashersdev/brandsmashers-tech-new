/** @type {import('next').NextConfig} */

import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during build to avoid configuration issues
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
      protocol: 'https',
      hostname: 'media.licdn.com', 
    },
    {
        protocol: 'https',
        hostname: 'randomuser.me', 
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/all-links',
        destination: 'https://bstree-yn8q.vercel.app/',
      },
    ];
  },
  // Enable bundle analyzer when ANALYZE=true
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          fs: false,
        };
      }
      return config;
    },
  }),
};

export default withBundleAnalyzer(nextConfig);
