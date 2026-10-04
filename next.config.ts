import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  // Required by @opennextjs/cloudflare (it reads .next/standalone/.next/server).
  output: 'standalone' as const,
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
    ],
    unoptimized: true,
  },
  async redirects() {
    return [
      // The retired Chinese URLs are folded into the canonical English path.
      // NOTE: do NOT add `/en` -> `/` here. next-intl's middleware already
      // strips the default-locale prefix, and because Next re-evaluates
      // redirects after a middleware rewrite, an `/en` rule turns `/` into a
      // self-redirect loop.
      { source: '/zh', destination: '/', permanent: true },
      { source: '/zh/:path*', destination: '/:path*', permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
