import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { ATTRACTION, HTML_LANG, OG_LOCALE, SEO_SITE_NAME, localeUrl, type Locale } from '@/config/site';
import { buildAlternates } from '@/lib/seo';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const selfUrl = localeUrl(locale as Locale, '/');

  return {
    metadataBase: new URL(localeUrl('en', '/')),
    title: messages.meta.title,
    description: messages.meta.description,
    applicationName: SEO_SITE_NAME,
    alternates: buildAlternates(locale as Locale, '/'),
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: selfUrl,
      siteName: SEO_SITE_NAME,
      locale: OG_LOCALE[locale as Locale],
      type: 'website',
      images: [
        {
          url: `${localeUrl('en', '/')}gallery/images%20(1).jpg`,
          width: 1200,
          height: 800,
          alt: ATTRACTION.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={HTML_LANG[locale as Locale]} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
