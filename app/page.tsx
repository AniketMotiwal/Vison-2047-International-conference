'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/sections/about-section';
import ThemesSection from '@/components/sections/themes-section';
import TimelineSection from '@/components/sections/timeline-section';
import WhyAttendSection from '@/components/sections/WhoShouldAttend';
import PatronsSection from '@/components/sections/patrons-section';
import OrganizingCommitteeSection from '@/components/sections/organizing-committee-section';
// import AssociationUniversitiesSection from '@/components/sections/association-universities-section';
import LocationSection from '@/components/sections/location-section';
import RegistrationSection from '@/components/sections/registration-section';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Sidebar from '@/components/Sidebar';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <LoadingScreen isLoading={isLoading} />
      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <TimelineSection />
      <WhyAttendSection />
      <PatronsSection />
      <OrganizingCommitteeSection />
      {/* <AssociationUniversitiesSection /> */}
      <LocationSection />
      <RegistrationSection />
      <Footer />
    </>
  );
}
