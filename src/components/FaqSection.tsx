import { useTranslations, useMessages } from 'next-intl';

export type FaqItem = { q: string; a: string };

export default function FaqSection() {
  const t = useTranslations('faq');
  const messages = useMessages() as any;
  const items: FaqItem[] = messages?.faq?.items || [];

  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-3">
          {items.map((item, i) => (
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
      </div>
    </section>
  );
}
