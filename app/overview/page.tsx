'use client';
import type { Metadata } from "next";
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";

import { conferenceData } from "@/lib/conference-data";

export default function OverviewPage() {
  return (
    <>
    
        <Header />
        <Sidebar />
        
        <main className="min-h-screen bg-white">
          {/* Header Section */}
          <div className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white">
            <div className="text-center px-4">
              <div className="inline-block bg-gradient-to-r from-[#FFD124] to-[#004178] px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-xl mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-wider">
                  CONFERENCE OVERVIEW
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-8">
                {conferenceData.tagline}
              </p>
              <p className="text-base md:text-lg text-gray-500 mt-4">
                {conferenceData.dates} | {conferenceData.location}
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full px-4 md:px-6 py-16 md:py-20 max-w-6xl mx-auto">
            {/* Conference Title & Description */}
            <div className="mb-16 relative w-full">
              <div className="relative border-2 border-dashed border-gray-400 p-6 md:p-12 bg-gray-50 rounded-lg w-full">
                <div className="absolute -top-4 -left-2 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full"></div>
                <div className="absolute -top-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-red-600 rounded-full"></div>
                <div className="absolute -bottom-4 -left-2 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-blue-900 rounded-full"></div>
                <div className="absolute -bottom-4 -right-2 md:-right-4 w-6 h-6 md:w-8 md:h-8 bg-blue-900 rounded-full"></div>

                {/* Main Overview Content */}
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify font-serif">
                  <span className="text-blue-700 font-semibold">
                    International Conference on Vision@2047: A Prosperous and Great Bharat 2.0
                  </span> — April 24–26, 2026, jointly organised by IIT Roorkee, Swadeshi Shodh Sansthan (SSS, New Delhi), and a hundred-plus premier institutions across Bharat and the world — is a landmark convergence of civilizational wisdom, frontier science, and transformative statecraft. Anchored in Integral Humanism and the eternal philosophy of Vasudhaiva Kutumbakam, this conference pioneers futuristic technologies and an evidence-based civilizational blueprint for Bharat's emergence as humanity's most developed, self-reliant, and visionary nation — where every one of Bharat's vast population becomes a sovereign, empowered contributor to national and global prosperity.
                </p>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-justify font-serif">
                  Eight transformative thematic tracks compose a breathtaking civilizational masterplan:
                </p>

                {/* Eight Themes */}
                <div className="space-y-4 mb-6">
                  <div className="flex gap-3 items-start">
                    <span className="font-bold text-blue-700 text-lg">1.</span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                      <span className="font-semibold">A Young Dynamic Population</span> unleashing the world's greatest demographic energy for nation-building ensuring dignified self-reliance for every citizen and digital sovereignty for future generation
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-bold text-blue-700 text-lg">2.</span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                      <span className="font-semibold">A Fully Employed Bharat</span> reimagining cooperative, knowledge-driven livelihoods, startups, and entrepreneurship
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-bold text-blue-700 text-lg">3.</span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                      <span className="font-semibold">The World's Largest Economy</span> redesigning global financial architecture through indigenous-to-ultramodern manufacturing
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-bold text-blue-700 text-lg">4.</span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                      <span className="font-semibold">An Impenetrable Security System</span> forging full-spectrum strategic dominance from earth to air and ocean depths
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-bold text-blue-700 text-lg">5.</span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                      <span className="font-semibold">A Leader in Science and Technology</span> achieving quantum, biological, and energy sovereignty for all of humanity
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-bold text-blue-700 text-lg">6.</span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                      <span className="font-semibold">An Environmentally Friendly Bharat</span> weaving the water-energy-food nexus into a net-zero civilizational promise for future generation
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-bold text-blue-700 text-lg">7.</span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                      <span className="font-semibold">A Strong Advocate of Global Brotherhood</span> projecting the Vishwaguru vision - leading climate justice, digital equity, pharmaceutical access, and peaceful multilateral governance for the Global South and the entire world family
                    </p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-bold text-blue-700 text-lg">8.</span>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed text-justify font-serif">
                      <span className="font-semibold">A Proponent of High Moral Values</span> building a spiritually grounded, casteless, and harmonious nationhood rooted in Satya, Ahinsa, and universal human welfare
                    </p>
                  </div>
                </div>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-serif mt-6 pt-4 border-t-2 border-gray-300">
                  <span className="font-bold text-blue-900">It is a Call to Action</span> to redesign India's future through the convergence of indigenous wisdom, cutting-edge innovation, and inclusive human flourishing, positioning Vikas ka Bharatiya Pratiman (Bhartiya Model of Development) @2047 as a model for the entire world.
                </p>
              </div>
            </div>

            {/* Conference Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-md border-l-4 border-blue-900">
                <h3 className="text-xl font-bold text-blue-900 mb-3">🗓️ Duration</h3>
                <p className="text-gray-700">{conferenceData.dates}</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg shadow-md border-l-4 border-yellow-600">
                <h3 className="text-xl font-bold text-yellow-700 mb-3">📍 Location</h3>
                <p className="text-gray-700">{conferenceData.location}</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-md border-l-4 border-purple-600">
                <h3 className="text-xl font-bold text-purple-700 mb-3">🎯 Focus</h3>
                <p className="text-gray-700">Vision@2047</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-center pt-8 mt-12">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                ⬆️ Back to Top
              </button>
              <a
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition"
              >
                🏠 Back to Homepage
              </a>
            </div>
          </div>
        </main>

        <Footer />
  
    </>
  );
}
