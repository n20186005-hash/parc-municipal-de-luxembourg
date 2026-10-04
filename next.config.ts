import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  output: 'standalone' as const,
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      // English is the root version: fold the old /en URLs (and the retired
      // /zh ones) into the canonical path so signals stay on `/`.
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      { source: '/zh', destination: '/', permanent: true },
      { source: '/zh/:path*', destination: '/:path*', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
