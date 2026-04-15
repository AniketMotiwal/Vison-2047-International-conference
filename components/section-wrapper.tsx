/**
 * Section wrapper component for consistent styling and scroll targets
 */
import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  darkBg?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = '',
  darkBg = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative w-full scroll-mt-16 ${
        darkBg ? 'bg-slate-50 dark:bg-slate-900' : 'bg-white dark:bg-slate-950'
      } ${className}`}
    >
      {children}
    </section>
  );
}
