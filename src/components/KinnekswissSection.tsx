import { useTranslations, useLocale, useMessages } from 'next-intl';
import { localPath, type Locale } from '@/config/site';

/**
 * Dedicated Kinnekswiss block on the home page. Kinnekswiss is the single
 * biggest keyword cluster of the site, so it gets its own H2 and a strong
 * internal link to /kinnekswiss.
 */
export default function KinnekswissSection() {
  const t = useTranslations('kinnekswiss');
  const tHeader = useTranslations('header');
  const locale = useLocale() as Locale;
  const messages = useMessages() as any;
  const paragraphs: string[] = messages?.kinnekswiss?.paragraphs || [];
  const bullets: string[] = messages?.kinnekswiss?.bullets || [];

  return (
    <section id="kinnekswiss" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          {t('lead')}
        </p>

        <div className="space-y-4 mb-8">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {paragraph}
            </p>
          ))}
        </div>

        <ul
          className="rounded-xl p-6 mb-8 space-y-3"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
        >
          {bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={localPath(locale, '/kinnekswiss')}
          className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
          style={{ color: 'var(--accent)' }}
        >
          <span>{t('linkText')}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <span className="sr-only">{tHeader('kinnekswiss')}</span>
      </div>
    </section>
  );
}
