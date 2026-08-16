import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Images are served from /public today. When real project screenshots move to an
  // external host or CDN later, add its hostname to `remotePatterns` here.
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Conservative, widely-compatible security headers. Nothing here blocks
  // adding analytics or a cookie banner later.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
