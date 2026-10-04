'use client';

import { useTranslations } from 'next-intl';
import { ATTRACTION } from '@/config/site';

export default function BasicInfo() {
  const t = useTranslations('basicInfo');

  return (
    <section id="info" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard title={t('officialName')} value={t('officialNameValue')} />
          <InfoCard title={t('type')} value={t('typeValue')} />
          <InfoCard title={t('location')} value={t('locationValue')} />
          <InfoCard
            title={t('googleRating')}
            value={`${ATTRACTION.googleRating} / 5 · ${ATTRACTION.googleReviewCount.toLocaleString('en-US')}`}
            note={t('ratingNote')}
          />
          <InfoCard title={t('address')} value={t('addressValue')} />
          <InfoCard title={t('plusCode')} value={ATTRACTION.plusCode} />
          <InfoCard title={t('managedBy')} value={t('managedByValue')} />
          <InfoCard title={t('visitTime')} value={t('visitTimeValue')} />
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value, note }: { title: string; value: string; note?: string }) {
  return (
    <div
      className="rounded-xl p-5"
      style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-color)' }}
    >
      <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{title}</p>
      <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{value}</p>
      {note ? <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{note}</p> : null}
    </div>
  );
}
