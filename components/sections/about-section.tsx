'use client';

import { conferenceData } from '@/lib/conference-data';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-[#4a3f83] via-[#6b4a8f] to-[#d4454d] px-12 py-4 rounded-lg shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
                ABOUT THE CONFERENCE
              </h2>
            </div>
          </div>
        </div>

        {/* About Description with Decorative Border */}
        <div className="mb-16 relative">
          <div className="relative border-2 border-dashed border-gray-400 p-8 md:p-12 bg-gray-50">
            {/* Decorative Circles */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#d4454d] rounded-full"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#d4454d] rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#4a3f83] rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-[#4a3f83] rounded-full"></div>

            <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-6 text-justify font-serif">
              The "International Conference on Vision@2047: A Prosperous and Great Bharat 2.0" — April 24–26, 2026, jointly organised by IIT Roorkee, Swadeshi Shodh Sansthan (SSS, New Delhi), and a hundred-plus premier institutions across Bharat and the world — is a landmark convergence of civilizational wisdom, frontier science, and transformative statecraft. Anchored in Integral Humanism and the eternal philosophy of Vasudhaiva Kutumbakam, this conference pioneers futuristic technologies and an evidence-based civilizational blueprint for Bharat's emergence as humanity's most developed, self-reliant, and visionary nation — where every one of Bharat's vast populations becomes a sovereign, empowered contributor to national and global prosperity.
            </p>

            <p className="text-base md:text-lg text-gray-800 leading-relaxed text-justify font-serif">
              Eight transformative thematic tracks compose a breathtaking civilizational masterplan addressing demographic dividends, economic resilience, inclusive security systems, scientific leadership, environmental sustainability, cultural diplomacy, and moral foundations — positioning Vikas ka Bharatiya Pratiman (@2047) as a model for the entire world.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#003D7A] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#003D7A] mb-4 tracking-wide">{conferenceData.mission.title}</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {conferenceData.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#FFB81C] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#FFB81C] mb-4 tracking-wide">{conferenceData.vision.title}</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {conferenceData.vision.description}
            </p>
          </div>

          {/* Objectives */}
          <div className="bg-white rounded-lg shadow-md p-8 border-l-4 border-[#D97706] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-[#D97706] mb-4 tracking-wide">OBJECTIVES</h3>
            <ul className="space-y-3">
              {conferenceData.objectives.slice(0, 3).map((obj, idx) => (
                <li key={idx} className="text-gray-700 text-xs leading-relaxed flex gap-2">
                  <span className="text-[#FFB81C] font-bold">•</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Full Objectives List */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-100 rounded-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-[#003D7A] mb-6 tracking-wide">Strategic Objectives & Thematic Tracks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conferenceData.objectives.map((obj, idx) => (
              <div key={idx} className="flex gap-3">
                <div className="w-6 h-6 bg-gradient-to-br from-[#FFB81C] to-[#D97706] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-md">
                  <span className="text-white text-xs font-bold">{idx + 1}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
