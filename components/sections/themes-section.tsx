'use client';

import { conferenceData } from '@/lib/conference-data';
import Script from "next/script";

export default function ThemesSection() {
  return (
    <section id="themes" className="py-16 bg-white">

      {/* 💣 HIDDEN SEO CONTENT */}
      <h2 className="sr-only">
        Vision 2047 Conference Themes IIT Roorkee India Innovation AI Sustainability Governance
      </h2>

      <p className="sr-only">
        Explore key themes of Vision 2047 International Conference including artificial intelligence,
        sustainable development, governance, innovation, economy, technology and Bharat development roadmap.
      </p>

      {/* 💣 STRUCTURED DATA (Themes List) */}
      <Script
        id="themes-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Conference Themes Vision 2047",
            itemListElement: conferenceData.themes.map((theme, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: theme.title,
            })),
          }),
        }}
      />

      {/* Heading (UNCHANGED) */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#003D7A]">
          Conference Themes
        </h2>
      </div>

      {/* Grid */}
      <div className="w-full px-3 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">

          {conferenceData.themes.map((theme, index) => (
            
            <div
              key={theme.id}
              className="
                relative group
                rounded-2xl
                overflow-hidden
                bg-white
                border border-gray-200
                shadow-md
                hover:shadow-2xl
                transition-all duration-500
                hover:-translate-y-2
              "
            >

              {/* Animated Top Bar */}
              <div className="
                h-1 w-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                group-hover:w-full transition-all duration-500
              " />

              {/* Background Fill */}
              <div className="
                absolute inset-0 
                bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
                opacity-0 group-hover:opacity-10
                transition duration-500
              " />

              {/* Content */}
              <div className="relative p-6 flex flex-col items-center justify-center text-center gap-3">

                <div className="
                  w-12 h-12 rounded-full
                  bg-gradient-to-br from-blue-500 to-purple-500
                  flex items-center justify-center
                  text-white font-bold text-lg
                  group-hover:scale-110 transition
                ">
                  {index + 1}
                </div>

                <h3 className="
                  font-semibold
                  text-gray-800
                  text-sm md:text-base
                  leading-snug
                  line-clamp-2
                  group-hover:text-blue-600
                  transition
                ">
                  {theme.title}
                </h3>

              </div>

            </div>

          ))}

        </div>
      </div>

    </section>
  );
}