import { useTranslations, useLocale } from 'next-intl';
import { getTopic, RELATED_TOPICS, type TopicContent } from '@/content/topics';
import type { TopicSlug } from '@/i18n/routing';
import { ATTRACTION, localPath, type Locale } from '@/config/site';

const HEADER_KEY: Record<TopicSlug, string> = {
  kinnekswiss: 'kinnekswiss',
  picnic: 'picnic',
  playground: 'playground',
  events: 'events',
  'how-to-get-there': 'directions',
  'nearby-attractions': 'nearby',
};

export default function TopicPage({ slug }: { slug: TopicSlug }) {
  const locale = useLocale() as Locale;
  const tHeader = useTranslations('header');
  const tMap = useTranslations('mapSection');
  const content: TopicContent = getTopic(slug, locale);
  const related = RELATED_TOPICS[slug];

  return (
    <>
      <header
        className="pt-28 pb-12 px-4 sm:px-6"
        style={{ background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)' }}
      >
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs mb-4" aria-label="Breadcrumb">
            <a href={localPath(locale, '/')} className="hover:underline" style={{ color: 'var(--text-muted)' }}>
              {ATTRACTION.name}
            </a>
            <span style={{ color: 'var(--text-muted)' }}> / </span>
            <span style={{ color: 'var(--text-muted)' }}>{content.hero.title}</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {content.hero.title}
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            {content.hero.subtitle}
          </p>
        </div>
      </header>

      <main className="px-4 sm:px-6">
        <div className="max-w-3xl mx-auto py-12">
          {content.intro.map((paragraph, i) => (
            <p key={i} className="text-lg leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {paragraph}
            </p>
          ))}

          <dl
            className="grid sm:grid-cols-2 gap-4 my-10 p-6 rounded-xl"
            style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
          >
            {content.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{fact.label}</dt>
                <dd className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{fact.value}</dd>
              </div>
            ))}
          </dl>

          {content.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2
                className="font-display text-2xl sm:text-3xl font-semibold mb-4"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p key={i} className="leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="space-y-2 mt-3">
                  {section.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                      <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section id="faq" className="mb-12">
            <h2
              className="font-display text-2xl sm:text-3xl font-semibold mb-6"
              style={{ color: 'var(--text-primary)' }}
            >
              {faqTitle(locale)}
            </h2>
            <div className="space-y-3">
              {content.faq.map((item, i) => (
                <details
                  key={i}
                  className="rounded-xl p-5"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
                >
                  <summary
                    className="font-medium cursor-pointer list-none flex items-start justify-between gap-4"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <span>{item.q}</span>
                    <span aria-hidden="true" style={{ color: 'var(--accent)' }}>+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: '1px solid var(--map-border)' }}
            >
              <iframe
                src={ATTRACTION.embedUrl}
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${ATTRACTION.name} — map`}
              />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href={ATTRACTION.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                {tMap('openMaps')}
              </a>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {ATTRACTION.fullAddress} · {ATTRACTION.plusCode}
              </span>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              {tHeader('topicsLabel')}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {related.map((item) => (
                <a
                  key={item}
                  href={localPath(locale, `/${item}`)}
                  className="rounded-xl p-4 text-sm font-medium hover:underline"
                  style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                >
                  {tHeader(HEADER_KEY[item])}
                </a>
              ))}
            </div>
          </section>

          <a
            href={localPath(locale, '/')}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            {tHeader('backToHome')}
          </a>
        </div>
      </main>
    </>
  );
}

function faqTitle(locale: Locale): string {
  if (locale === 'fr') return 'Questions fréquentes';
  if (locale === 'de') return 'Häufige Fragen';
  return 'Frequently asked questions';
}
