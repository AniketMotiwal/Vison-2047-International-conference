import type { Metadata } from "next";
import Script from "next/script";

import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/sections/about-section';
import ThemesSection from '@/components/sections/themes-section';
import TimelineSection from '@/components/sections/timeline-section';
import WhyAttendSection from '@/components/sections/WhoShouldAttend';
import PatronsSection from '@/components/sections/patrons-section';
import OrganizingCommitteeSection from '@/components/sections/organizing-committee-section';
import AssociationUniversitiesSection from '@/components/sections/association-universities-section';
import LocationSection from '@/components/sections/location-section';
import RegistrationSection from '@/components/sections/registration-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Sidebar from '@/components/Sidebar';
import ContactUs from '@/components/Contact-us';
import LoadingWrapper from '@/components/LoadingWrapper';

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "Vision 2047 Conference IIT Roorkee",
  description:
    "Vision 2047 International Conference at IIT Roorkee (April 24–26, 2026). Join global experts in AI, governance, sustainability and innovation.",
  alternates: {
    canonical: "https://vision2047.iitr.ac.in",
  },
};

export default function Home() {
  return (
    <>
      {/* ✅ STRUCTURED DATA (EVENT SEO BOOST) */}
      <Script
        id="event-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Vision 2047 International Conference",
            startDate: "2026-04-24",
            endDate: "2026-04-26",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            eventStatus: "https://schema.org/EventScheduled",
            location: {
              "@type": "Place",
              name: "IIT Roorkee",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Roorkee",
                addressRegion: "Uttarakhand",
                addressCountry: "India",
              },
            },
            image: [
              "https://vision2047.iitr.ac.in/og-image.png",
            ],
            description:
              "International Conference on Vision 2047 bringing together experts in science, governance and innovation.",
            organizer: {
              "@type": "Organization",
              name: "IIT Roorkee",
              url: "https://vision2047.iitr.ac.in",
            },
          }),
        }}
      />

      {/* ✅ LOADER WRAPPER */}
      <LoadingWrapper>
        <Sidebar />
        <Header />

        {/* ✅ MAIN CONTENT */}
        <main>
          <HeroSection />
          <AboutSection />
          <ThemesSection />
          <TimelineSection />
          <LocationSection />
          <WhyAttendSection />
          {/* <PatronsSection /> */}
          {/* <OrganizingCommitteeSection /> */}
        
          <RegistrationSection />
          {/* <AssociationUniversitiesSection /> */}
          <ContactUs />
        </main>

        <Footer />
      </LoadingWrapper>
    </>
  );
}