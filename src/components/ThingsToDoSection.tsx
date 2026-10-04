import { useTranslations, useLocale, useMessages } from 'next-intl';
import { localPath, type Locale } from '@/config/site';

type Item = { slug: string; title: string; desc: string };

/** Internal-linking hub: sends users and crawlers to the intent pages. */
export default function ThingsToDoSection() {
  const t = useTranslations('thingsToDo');
  const locale = useLocale() as Locale;
  const messages = useMessages() as any;
  const items: Item[] = messages?.thingsToDo?.items || [];

  return (
    <section id="things-to-do" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {items.map((item) => (
            <a
              key={item.slug}
              href={localPath(locale, `/${item.slug}`)}
              className="rounded-xl p-5 sm:p-6 transition-shadow hover:shadow-md block"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--card-shadow)',
              }}
            >
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
              <span className="text-sm font-medium inline-flex items-center gap-1.5" style={{ color: 'var(--accent)' }}>
                {item.title}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
