import { setRequestLocale, getMessages } from 'next-intl/server';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import KinnekswissSection from '@/components/KinnekswissSection';
import ThingsToDoSection from '@/components/ThingsToDoSection';
import InfoSection from '@/components/InfoSection';
import TransportSection from '@/components/TransportSection';
import ParkingSection from '@/components/ParkingSection';
import RouteSection from '@/components/RouteSection';
import PhotoSpotsSection from '@/components/PhotoSpotsSection';
import Gallery from '@/components/Gallery';
import MapEmbed from '@/components/MapEmbed';
import Reviews from '@/components/Reviews';
import NearbySection from '@/components/NearbySection';
import FaqSection from '@/components/FaqSection';
import Footer from '@/components/Footer';
import { ATTRACTION, localeUrl, type Locale } from '@/config/site';
import {
  buildAttractionJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  jsonLdScript,
} from '@/lib/seo';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = (await getMessages()) as any;
  const faq = (messages?.faq?.items || []) as Array<{ q: string; a: string }>;

  const selfUrl = localeUrl(locale as Locale, '/');
  const attraction = buildAttractionJsonLd(locale as Locale, selfUrl);
  const faqLd = buildFaqJsonLd(faq, locale as Locale, selfUrl);
  const pageLd = buildWebPageJsonLd(
    locale as Locale,
    selfUrl,
    `${ATTRACTION.name} — ${messages?.meta?.title ?? ''}`,
    messages?.meta?.description ?? '',
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(attraction) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(pageLd) }}
      />
      {faq.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(faqLd) }}
        />
      ) : null}

      <Header />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <KinnekswissSection />
        <ThingsToDoSection />
        <InfoSection />
        <TransportSection />
        <ParkingSection />
        <RouteSection />
        <PhotoSpotsSection />
        <Gallery />
        <MapEmbed />
        <Reviews />
        <NearbySection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
