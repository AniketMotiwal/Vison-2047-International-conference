'use client';

import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/loading-screen';

export default function LoadingWrapper({ children }: any) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800); // ⭐ max 800ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && children}
    </>
  );
}