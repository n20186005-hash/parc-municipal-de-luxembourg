import { useTranslations, useMessages } from 'next-intl';

export default function ParkingSection() {
  const t = useTranslations('parking');
  const messages = useMessages() as any;
  const items: string[] = messages?.parking?.items || [];

  return (
    <section id="parking" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <p className="leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
          {t('lead')}
        </p>

        <ul className="grid sm:grid-cols-2 gap-3 mb-6">
          {items.map((item, i) => (
            <li
              key={i}
              className="rounded-xl p-4 text-sm"
              style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)' }}
            >
              {item}
            </li>
          ))}
        </ul>

        <p
          className="rounded-xl p-4 text-sm leading-relaxed"
          style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--accent)', color: 'var(--text-secondary)' }}
        >
          {t('note')}
        </p>
      </div>
    </section>
  );
}
