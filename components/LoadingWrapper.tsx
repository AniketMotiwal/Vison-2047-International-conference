'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';

export default function LoadingWrapper({ children }: any) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800); // ⭐ max 800ms

    const handlePageShow = (event: PageTransitionEvent) => {
      // When returning with browser back-forward cache, avoid getting stuck on loader.
      if (event.persisted) {
        setIsLoading(false);
      }
    };

    window.addEventListener('pageshow', handlePageShow);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && children}
    </>
  );
}