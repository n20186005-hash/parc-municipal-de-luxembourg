import type { MetadataRoute } from 'next';
import { LOCALES, localeUrl, type Locale } from '@/config/site';
import { TOPIC_SLUGS } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

const PATHS = ['/', ...TOPIC_SLUGS.map((slug) => `/${slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PATHS) {
    for (const locale of routing.locales as Locale[]) {
      entries.push({
        url: localeUrl(locale, path),
        lastModified: new Date('2026-10-04'),
        changeFrequency: path === '/' ? 'weekly' : 'monthly',
        priority: path === '/' ? 1 : path === '/kinnekswiss' ? 0.9 : 0.7,
        alternates: {
          languages: Object.fromEntries(LOCALES.map((l) => [l, localeUrl(l, path)])),
        },
      });
    }
  }

  return entries;
}
