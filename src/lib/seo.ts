import { ATTRACTION, LOCALES, SITE_URL, localeUrl, type Locale } from '@/config/site';

type PathInput = string;

/**
 * Canonical + hreflang for a page. English is the root version, so
 * `/` and `/kinnekswiss` are the English URLs, x-default points at them.
 */
export function buildAlternates(locale: Locale, path: PathInput = '/') {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) {
    languages[l] = localeUrl(l, path);
  }
  languages['x-default'] = localeUrl('en', path);

  return {
    canonical: localeUrl(locale, path),
    languages,
  };
}

/** TouristAttraction + Park. Deliberately contains no aggregateRating. */
export function buildAttractionJsonLd(locale: Locale, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'Park'],
    '@id': `${SITE_URL}#attraction`,
    name: ATTRACTION.name,
    alternateName: ATTRACTION.alternateNames,
    description:
      'Historic city park in Ville-Haute, Luxembourg City, laid out 1871–1878 by Édouard André on the former fortress ramparts. Home of the Kinnekswiss meadow, playgrounds, the orangery, Villa Vauban and Villa Louvigny.',
    url,
    image: `${SITE_URL}/gallery/images%20(1).jpg`,
    isAccessibleForFree: ATTRACTION.isAccessibleForFree,
    touristType: ['families', 'walkers', 'picnickers', 'photographers'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: ATTRACTION.streetAddress,
      postalCode: ATTRACTION.postalCode,
      addressLocality: ATTRACTION.addressLocality,
      addressRegion: ATTRACTION.addressRegion,
      addressCountry: ATTRACTION.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ATTRACTION.latitude,
      longitude: ATTRACTION.longitude,
    },
    hasMap: ATTRACTION.mapsUrl,
    sameAs: [
      'https://en.wikipedia.org/wiki/Parc_municipal_de_Luxembourg',
      ATTRACTION.officialUrls.cityParks,
    ],
    containedInPlace: {
      '@type': 'City',
      name: 'Luxembourg City',
      address: { '@type': 'PostalAddress', addressCountry: 'LU' },
    },
  };
}

export function buildFaqJsonLd(
  faq: Array<{ q: string; a: string }>,
  locale: Locale,
  url: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: locale,
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function buildBreadcrumbJsonLd(
  locale: Locale,
  trail: Array<{ name: string; url: string }>,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildWebPageJsonLd(
  locale: Locale,
  url: string,
  name: string,
  description: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'Parc municipal de Luxembourg',
      inLanguage: LOCALES,
    },
    about: { '@id': `${SITE_URL}#attraction` },
  };
}

export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
