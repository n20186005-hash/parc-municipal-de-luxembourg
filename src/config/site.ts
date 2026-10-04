/**
 * Single source of truth for every language-neutral fact about
 * Parc municipal de Luxembourg (Kinnekswiss / Parc Edouard André).
 * Edit here — never hard-code rating, address or map links in components.
 */

export const SITE_URL = 'https://www.parcmunicipaldeluxembourg.com';

export const ATTRACTION = {
  name: 'Parc municipal de Luxembourg',
  officialName: 'Parc municipal de Luxembourg (Parc Edouard André)',
  alternateNames: [
    'Parc municipal de Luxembourg',
    'Parc Edouard André',
    'Municipal Park of Luxembourg',
    'Kinnekswiss',
    'Stadtpark Luxemburg',
  ],
  attractionType: 'City park',
  streetAddress: '38 Bd Joseph II',
  postalCode: '1840',
  addressLocality: 'Ville-Haute Luxembourg',
  addressRegion: 'Luxembourg',
  addressCountry: 'LU',
  fullAddress: '38 Bd Joseph II, 1840 Ville-Haute Luxembourg',
  plusCode: 'J47F+95 Luxembourg',
  latitude: 49.6117,
  longitude: 6.1264,
  mapsUrl: 'https://maps.app.goo.gl/ExK6hZ12QB7VwYoV7',
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.9!2d6.1264!3d49.6117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479549c7f0a3f0a1%3A0x0!2sParc%20municipal%20de%20Luxembourg!5e0!3m2!1sen!2slu!4v1700000000000!5m2!1sen!2slu',
  /** Google Maps public rating — shown on the page, never injected as own aggregateRating. */
  googleRating: 4.6,
  googleReviewCount: 6456,
  ratingCheckedLabel: 'Google Maps · checked October 2026',
  isAccessibleForFree: true,
  /** Built 1871–1878 on the fortress site cleared after the 1867 Treaty of London. */
  designedBy: 'Édouard André',
  builtYears: '1871–1878',
  managedBy: 'Ville de Luxembourg (Luxembourg City)',
  officialUrls: {
    city: 'https://www.vdl.lu/',
    cityParks: 'https://www.vdl.lu/en/visiting/leisure-and-nature/parks',
    kinnekswissLoves:
      'https://www.vdl.lu/en/visiting/leisure-and-recreation/festivals-fairs-and-events/summer-der-stad-summer-city/kinnekswiss-loves',
    visitLuxembourg: 'https://www.visitluxembourg.com/',
    visitLuxembourgCity: 'https://www.luxembourg-city.com/',
    luxembourgLu: 'https://luxembourg.public.lu/en.html',
    cityMuseum: 'https://citymuseum.lu/',
    mobiliteit: 'https://www.mobiliteit.lu/en/',
  },
} as const;

export const SEO_SITE_NAME = 'Parc municipal de Luxembourg (Kinnekswiss) — Visitor Guide';

export type Locale = 'en' | 'fr' | 'de';

export const LOCALES: Locale[] = ['en', 'fr', 'de'];

export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
  de: 'de',
};

export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  de: 'de_DE',
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
};

/** Locale-aware absolute URL. English lives at the root, other locales at /xx. */
export function localeUrl(locale: Locale, path = '/'): string {
  const clean = path === '/' || path === '' ? '' : path.startsWith('/') ? path : `/${path}`;
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `${SITE_URL}${prefix}${clean === '/' ? '' : clean}`;
}

/** Locale-aware internal href (no host). */
export function localPath(locale: Locale, path = '/'): string {
  const clean = path === '/' || path === '' ? '' : path.startsWith('/') ? path : `/${path}`;
  return locale === 'en' ? clean || '/' : `/${locale}${clean}`;
}
