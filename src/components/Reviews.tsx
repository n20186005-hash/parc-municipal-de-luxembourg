import { useTranslations, useLocale } from 'next-intl';
import { ATTRACTION, type Locale } from '@/config/site';

function Stars({ filled }: { filled: number }) {
  return (
    <div className="flex gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={i <= filled ? '#f0b429' : 'var(--border-color)'}
          stroke="none"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const t = useTranslations('reviews');
  const locale = useLocale() as Locale;
  const nf = new Intl.NumberFormat(locale === 'de' ? 'de-DE' : locale === 'fr' ? 'fr-FR' : 'en-US');
  const ratingText = locale === 'en' ? '4.6' : '4,6';

  return (
    <section id="rating" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div
          className="rounded-xl p-6 sm:p-8 mb-8"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', boxShadow: 'var(--card-shadow)' }}
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <Stars filled={5} />
            <span className="text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>
              {ratingText} / 5
            </span>
            <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {nf.format(ATTRACTION.googleReviewCount)} · Google Maps
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
            {t('declaration')}
          </p>
          <div className="flex justify-start">
            <a
              href={ATTRACTION.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              style={{ color: 'var(--accent)', border: '1px solid var(--accent)' }}
            >
              <span>{t('checkLive')}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>

        <OfficialSources locale={locale} title={t('sourcesTitle')} />
      </div>
    </section>
  );
}

function OfficialSources({ locale, title }: { locale: Locale; title: string }) {
  const sources =
    locale === 'fr'
      ? [
          { label: 'Ville de Luxembourg — parcs', href: ATTRACTION.officialUrls.cityParks },
          { label: 'Ville de Luxembourg — Kinnekswiss', href: ATTRACTION.officialUrls.kinnekswissLoves },
          { label: 'Mobilitéit', href: ATTRACTION.officialUrls.mobiliteit },
          { label: 'Visit Luxembourg', href: ATTRACTION.officialUrls.visitLuxembourg },
        ]
      : locale === 'de'
      ? [
          { label: 'Stadt Luxemburg — Parks', href: ATTRACTION.officialUrls.cityParks },
          { label: 'Stadt Luxemburg — Kinnekswiss', href: ATTRACTION.officialUrls.kinnekswissLoves },
          { label: 'Mobilitéit', href: ATTRACTION.officialUrls.mobiliteit },
          { label: 'Visit Luxembourg', href: ATTRACTION.officialUrls.visitLuxembourg },
        ]
      : [
          { label: 'Ville de Luxembourg — parks', href: ATTRACTION.officialUrls.cityParks },
          { label: 'Ville de Luxembourg — Kinnekswiss events', href: ATTRACTION.officialUrls.kinnekswissLoves },
          { label: 'Mobilitéit — public transport', href: ATTRACTION.officialUrls.mobiliteit },
          { label: 'Visit Luxembourg', href: ATTRACTION.officialUrls.visitLuxembourg },
        ];

  return (
    <div
      id="sources"
      className="rounded-xl p-6"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <h3 className="font-display text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <ul className="space-y-2">
        {sources.map((s) => (
          <li key={s.href}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
              style={{ color: 'var(--accent)' }}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
