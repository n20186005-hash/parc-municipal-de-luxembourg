import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const TOPIC_SLUGS = [
  'kinnekswiss',
  'picnic',
  'playground',
  'events',
  'how-to-get-there',
  'nearby-attractions',
] as const;

export type TopicSlug = (typeof TOPIC_SLUGS)[number];

export const routing = defineRouting({
  // English is the root version (`/`); French and German live under /fr and /de.
  locales: ['en', 'fr', 'de'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'as-needed',
  },
  pathnames: {
    '/': '/',
    '/kinnekswiss': '/kinnekswiss',
    '/picnic': '/picnic',
    '/playground': '/playground',
    '/events': '/events',
    '/how-to-get-there': '/how-to-get-there',
    '/nearby-attractions': '/nearby-attractions',
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
