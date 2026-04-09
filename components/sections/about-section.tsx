'use client';

import { conferenceData } from '@/lib/conference-data';
import Script from "next/script";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">

      {/* 💣 HIDDEN SEO CONTENT (Google ke liye) */}
      <h2 className="sr-only">
        About Vision 2047 International Conference IIT Roorkee India
      </h2>

      <p className="sr-only">
        Vision 2047 International Conference at IIT Roorkee is a major academic
        and research conference in India focusing on AI, governance, sustainability,
        innovation and Bharat development roadmap 2047.
      </p>

      {/* 💣 STRUCTURED DATA (SEO BOOST) */}
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Vision 2047 International Conference",
            description:
              "International Conference on Vision 2047 at IIT Roorkee focusing on science, governance and innovation.",
            location: {
              "@type": "Place",
              name: "IIT Roorkee",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Roorkee",
                addressRegion: "Uttarakhand",
                addressCountry: "India"
              }
            }
          }),
        }}
      />

      {/* 🔥 Heading (UNCHANGED) */}
      <div className="text-center mb-16 px-4">
        <div className="inline-block bg-gradient-to-r from-[#4a3f83] via-[#6b4a8f] to-[#d4454d] px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wider">
            ABOUT THE CONFERENCE
          </h2>
        </div>
      </div>

      {/* 🔥 FULL WIDTH CONTENT */}
      <div className="w-full px-2 md:px-6">

        {/* 🔥 About Description Box */}
        <div className="mb-20 relative w-full">
          <div className="relative border-2 border-dashed border-gray-400 p-6 md:p-12 bg-gray-50 rounded-lg w-full">

            <div className="absolute -top-4 -left-2 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full"></div>
            <div className="absolute -top-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full"></div>
            <div className="absolute -bottom-4 -left-2 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-blue-900 rounded-full"></div>
            <div className="absolute -bottom-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-900 rounded-full"></div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify font-serif">
              The <span className="text-blue-700 font-semibold">
                "International Conference on Vision@2047: A Prosperous and Great Bharat 2.0"
              </span> — April 24–26, 2026, jointly organised by IIT Roorkee, Swadeshi Shodh Sansthan (SSS, New Delhi), and leading institutions — is a landmark convergence of civilizational wisdom, frontier science, and transformative statecraft.
            </p>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify font-serif">
              Eight transformative thematic tracks:
            </p>

            <div className="space-y-4">
              {conferenceData.objectives.map((track, idx) => (
                <p
                  key={idx}
                  className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif"
                >
                  {track}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* 🔥 Call to Action */}
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-justify font-serif mb-20 px-2 md:px-6 p-6 md:p-8 bg-blue-50 border-l-4 border-blue-900 rounded">
          <span className="font-bold text-blue-900">It is a Call to Action</span> to redesign India's future through innovation and indigenous wisdom.
        </p>

        {/* 🔥 Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border-l-4 border-blue-900 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 uppercase">
              {conferenceData.mission.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed font-serif">
              {conferenceData.mission.description}
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 border-l-4 border-yellow-500 hover:shadow-2xl transition-shadow">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-600 mb-6 uppercase">
              {conferenceData.vision.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed font-serif">
              {conferenceData.vision.description}
            </p>
          </div>

        </div>

        {/* 🔥 Objectives */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 md:p-12 border border-blue-700 mb-20">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-10 uppercase">
            OBJECTIVES
          </h3>

          <div className="space-y-5">
            {conferenceData.objectives.map((obj, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-sm font-bold">
                    {idx + 1}
                  </span>
                </div>
                <p className="text-white text-lg leading-relaxed font-serif">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}