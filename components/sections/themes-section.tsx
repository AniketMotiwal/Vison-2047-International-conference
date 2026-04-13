'use client';

import { conferenceData } from '@/lib/conference-data';
import Script from "next/script";

const CARD_COLORS = [
  { bg: '#1a1a2e', text: '#a8b4ff' },
  { bg: '#0d2137', text: '#7ecfff' },
  { bg: '#1f1200', text: '#ffb347' },
  { bg: '#0f2318', text: '#6dffb3' },
  { bg: '#2a0d1a', text: '#ff8ab4' },
  { bg: '#1a2a00', text: '#b8f54a' },
  { bg: '#200a2a', text: '#d98cff' },
  { bg: '#001f2a', text: '#4adeff' },
  { bg: '#2a1500', text: '#ffda6a' },
  { bg: '#0f0f0f', text: '#e0e0e0' },
];

export default function ThemesSection() {
  const displayedThemes = conferenceData.themes.slice(0, 10);

  return (
    <section id="themes" className="py-16 md:py-24 bg-[#faf9f6]">
      <Script 
        id="themes-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Conference Themes Vision 2047",
            itemListElement: displayedThemes.map((theme, i) => ({
              "@type": "ListItem", 
              position: i + 1, 
              name: theme.title,
            })),
          }),
        }}
      />

      <div className="text-center mb-12 md:mb-16 px-4">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-3">
          EXPLORE OUR VISION
        </p>
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
          Conference <span className="italic font-medium">Themes</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive grid: 1 column on mobile -> 2 columns on tablet -> 5 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {displayedThemes.map((theme, index) => {
            const color = CARD_COLORS[index % CARD_COLORS.length];
            return (
              <div
                key={theme.id}
                style={{ backgroundColor: color.bg }}
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                {/* Mobile: horizontal layout, Desktop: vertical square layout */}
                <div className="p-4 sm:p-5 md:p-6 flex sm:flex-row lg:flex-col items-center sm:items-start lg:items-stretch gap-4 sm:gap-5 lg:gap-0 min-h-[120px] sm:min-h-[140px] lg:min-h-[220px]">
                  
                  {/* Number section */}
                  <div className="flex-shrink-0">
                    <span 
                      style={{ color: color.text }}
                      className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold opacity-40"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Title section */}
                  <div className="flex-grow sm:flex-grow lg:mt-auto lg:flex-grow-0">
                    <p 
                      style={{ color: color.text }}
                      className="text-sm sm:text-base md:text-lg font-bold leading-tight tracking-wide"
                    >
                      {theme.title}
                    </p>
                    
                    {/* Animated underline */}
                    <div className="mt-2 sm:mt-3">
                      <div 
                        style={{ backgroundColor: color.text }}
                        className="h-0.5 w-8 sm:w-10 group-hover:w-full transition-all duration-300 rounded-full opacity-60"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}