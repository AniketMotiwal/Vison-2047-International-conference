'use client';
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";

import { conferenceData } from "@/lib/conference-data";

export default function MissionVisionPage() {
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
                  MISSION & VISION
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-8">
                Strategic Direction for Vision 2047
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full px-4 md:px-6 py-16 md:py-20 max-w-6xl mx-auto">
            {/* Vision Section */}
            <div className="mb-16">
              <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-l-8 border-yellow-500 hover:shadow-3xl transition-shadow">
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-5xl">🌟</div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 uppercase tracking-wide">
                      {conferenceData.vision.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-serif">
                  {conferenceData.vision.description}
                </p>

                <div className="mt-8 pt-8 border-t-2 border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-4">Key Pillars:</h3>
                  <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-yellow-600">✓</span>
                      <span className="text-gray-700">Self-reliant & Technologically Sovereign</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-yellow-600">✓</span>
                      <span className="text-gray-700">Morally Luminous Nation</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-yellow-600">✓</span>
                      <span className="text-gray-700">Empowered Architects everywhere</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-yellow-600">✓</span>
                      <span className="text-gray-700">Engine of Human Flourishing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mission Section */}
            <div className="mb-16">
              <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-l-8 border-blue-900 hover:shadow-3xl transition-shadow">
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-5xl">🎯</div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 uppercase tracking-wide">
                      {conferenceData.mission.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-serif">
                  {conferenceData.mission.description}
                </p>

                <div className="mt-8 pt-8 border-t-2 border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Strategic Outcomes:</h3>
                  <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-blue-900">✓</span>
                      <span className="text-gray-700">Dynamic Demographics</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-blue-900">✓</span>
                      <span className="text-gray-700">Full Employment</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-blue-900">✓</span>
                      <span className="text-gray-700">Economic Supremacy</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-blue-900">✓</span>
                      <span className="text-gray-700">Scientific Leadership</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-blue-900">✓</span>
                      <span className="text-gray-700">Environmental Stewardship</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-2xl text-blue-900">✓</span>
                      <span className="text-gray-700">Global Brotherhood & Moral Values</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision vs Mission Comparison */}
            <div className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-lg p-8 md:p-12 border border-gray-200 shadow-lg">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Vision & Mission Framework</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-yellow-700 flex items-center gap-2">
                    <span className="text-2xl">🌍</span> VISION
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Where do we want to be?</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    A self-reliant, technologically sovereign, and morally luminous nation where every citizen is an empowered architect of prosperity by 2047.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-blue-900 flex items-center gap-2">
                    <span className="text-2xl">🎯</span> MISSION
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>How will we get there?</strong>
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Through rigorous research, frontier science, and deliberation across eight transformative thematic tracks, co-creating actionable policy architecture.
                  </p>
                </div>
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
