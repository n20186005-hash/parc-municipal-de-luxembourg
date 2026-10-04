import { useTranslations, useLocale, useMessages } from 'next-intl';
import { localPath, type Locale } from '@/config/site';

type Item = { name: string; desc: string };

export default function NearbySection() {
  const t = useTranslations('nearby');
  const locale = useLocale() as Locale;
  const messages = useMessages() as any;
  const items: Item[] = messages?.nearby?.items || [];

  return (
    <section id="nearby" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.name}
              className="rounded-xl p-5"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
            >
              <h3 className="font-display text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href={localPath(locale, '/nearby-attractions')}
            className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
            style={{ color: 'var(--accent)' }}
          >
            <span>{t('moreLabel')}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
