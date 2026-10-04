import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopicPage from '@/components/TopicPage';
import { TOPIC_SLUGS, routing, type TopicSlug } from '@/i18n/routing';
import { getTopic } from '@/content/topics';
import type { Locale } from '@/config/site';
import { localeUrl } from '@/config/site';
import { buildAlternates, buildBreadcrumbJsonLd, buildFaqJsonLd, buildWebPageJsonLd, jsonLdScript } from '@/lib/seo';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    TOPIC_SLUGS.map((topic) => ({ locale, topic })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}): Promise<Metadata> {
  const { locale, topic } = await params;
  if (!routing.locales.includes(locale as Locale) || !TOPIC_SLUGS.includes(topic as TopicSlug)) {
    return {};
  }
  const content = getTopic(topic as TopicSlug, locale as Locale);
  const path = `/${topic}`;

  return {
    title: content.meta.title,
    description: content.meta.description,
    alternates: buildAlternates(locale as Locale, path),
    openGraph: {
      title: content.meta.title,
      description: content.meta.description,
      url: localeUrl(locale as Locale, path),
      type: 'article',
    },
  };
}

function TopicJsonLd({ locale, slug }: { locale: Locale; slug: TopicSlug }) {
  const content = getTopic(slug, locale);
  const url = localeUrl(locale, `/${slug}`);
  const breadcrumb = buildBreadcrumbJsonLd(locale, [
    { name: 'Parc municipal de Luxembourg', url: localeUrl(locale, '/') },
    { name: content.hero.title, url },
  ]);
  const page = buildWebPageJsonLd(locale, url, content.meta.title, content.meta.description);
  const faq = buildFaqJsonLd(content.faq, locale, url);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(page) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(faq) }}
      />
    </>
  );
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; topic: string }>;
}) {
  const { locale, topic } = await params;
  if (!routing.locales.includes(locale as Locale) || !TOPIC_SLUGS.includes(topic as TopicSlug)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <>
      <TopicJsonLd locale={locale as Locale} slug={topic as TopicSlug} />
      <Header />
      <TopicPage slug={topic as TopicSlug} />
      <Footer />
    </>
  );
}
