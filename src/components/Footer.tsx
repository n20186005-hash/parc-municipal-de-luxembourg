import { useTranslations, useLocale } from 'next-intl';
import { ATTRACTION, localPath, type Locale } from '@/config/site';

const TOPICS = [
  'kinnekswiss',
  'picnic',
  'playground',
  'events',
  'how-to-get-there',
  'nearby-attractions',
] as const;

const TOPIC_LABELS: Record<Locale, Record<string, string>> = {
  en: {
    kinnekswiss: 'Kinnekswiss meadow',
    picnic: 'Picnic in the park',
    playground: 'Playground',
    events: 'Events',
    'how-to-get-there': 'How to get there',
    'nearby-attractions': 'Nearby attractions',
  },
  fr: {
    kinnekswiss: 'La Kinnekswiss',
    picnic: 'Pique-nique',
    playground: 'Aire de jeux',
    events: 'Événements',
    'how-to-get-there': 'Accès',
    'nearby-attractions': 'Aux alentours',
  },
  de: {
    kinnekswiss: 'Die Kinnekswiss',
    picnic: 'Picknick',
    playground: 'Spielplatz',
    events: 'Veranstaltungen',
    'how-to-get-there': 'Anfahrt',
    'nearby-attractions': 'Umgebung',
  },
};

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale() as Locale;

  return (
    <footer
      className="py-12 px-4 sm:px-6"
      style={{ background: 'var(--bg-tertiary)', borderTop: '1px solid var(--border-color)' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-display text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
              {t('siteName')}
            </h3>
            <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
              {ATTRACTION.fullAddress} · {ATTRACTION.plusCode}
            </p>

            <p className="text-xs mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
              {t('topicsTitle')}
            </p>
            <div className="flex flex-col gap-2 mb-6">
              {TOPICS.map((slug) => (
                <a
                  key={slug}
                  href={localPath(locale, `/${slug}`)}
                  className="hover:underline text-sm"
                  style={{ color: 'var(--accent)' }}
                >
                  {TOPIC_LABELS[locale][slug]}
                </a>
              ))}
            </div>

            <p className="text-xs mb-2 font-medium" style={{ color: 'var(--text-primary)' }}>
              {t('officialResourcesTitle')}
            </p>
            <div className="flex flex-col gap-2">
              <a href={ATTRACTION.officialUrls.visitLuxembourg} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {t('officialLinks.visitLuxembourg')}
              </a>
              <a href={ATTRACTION.officialUrls.visitLuxembourgCity} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {t('officialLinks.visitLuxembourgCity')}
              </a>
              <a href={ATTRACTION.officialUrls.cityParks} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {t('officialLinks.cityParks')}
              </a>
              <a href={ATTRACTION.officialUrls.kinnekswissLoves} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {t('officialLinks.kinnekswiss')}
              </a>
              <a href={ATTRACTION.officialUrls.mobiliteit} target="_blank" rel="noopener noreferrer" className="hover:underline text-sm" style={{ color: 'var(--accent)' }}>
                {t('officialLinks.mobiliteit')}
              </a>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-sm mt-4 sm:mt-0">
            <a href={localPath(locale, '/privacy-policy')} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('privacy')}
            </a>
            <a href={localPath(locale, '/terms-of-service')} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('terms')}
            </a>
            <a href={localPath(locale, '/cookie-settings')} style={{ color: 'var(--text-secondary)' }} className="hover:underline">
              {t('cookies')}
            </a>
          </div>
        </div>

        <div
          className="pt-6 text-center text-sm space-y-4"
          style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}
        >
          <p>{t('rights')}</p>
          <p className="text-xs max-w-3xl mx-auto leading-relaxed">{t('disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
}
