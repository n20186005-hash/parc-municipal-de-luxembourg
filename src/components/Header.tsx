'use client';

import { useTranslations, useLocale } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { useState, useEffect } from 'react';
import { localPath, type Locale } from '@/config/site';

const NAV = [
  { slug: 'kinnekswiss', key: 'kinnekswiss' },
  { slug: 'picnic', key: 'picnic' },
  { slug: 'playground', key: 'playground' },
  { slug: 'events', key: 'events' },
  { slug: 'how-to-get-there', key: 'directions' },
  { slug: 'nearby-attractions', key: 'nearby' },
] as const;

export default function Header() {
  const t = useTranslations('header');
  const locale = useLocale() as Locale;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--bg-secondary)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href={localPath(locale, '/')} className="font-display text-base sm:text-lg font-semibold tracking-tight" style={{ color: scrolled ? 'var(--text-primary)' : '#fff' }}>
          {t('siteName')}
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {NAV.map((item) => (
            <a
              key={item.slug}
              href={localPath(locale, `/${item.slug}`)}
              className="text-sm font-medium transition-colors"
              style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
            >
              {t(item.key)}
            </a>
          ))}
          <a
            href={`${localPath(locale, '/')}#map`}
            className="text-sm font-medium transition-colors"
            style={{ color: scrolled ? 'var(--text-secondary)' : 'rgba(255,255,255,0.85)' }}
          >
            {t('map')}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
