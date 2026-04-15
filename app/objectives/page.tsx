'use client';
import Header from "@/components/header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/footer";

import { conferenceData } from "@/lib/conference-data";

export default function ObjectivesPage() {
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
                  CONFERENCE OBJECTIVES
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-8">
                Strategic Goals for Vision 2047
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full px-4 md:px-6 py-16 md:py-20 max-w-6xl mx-auto">
            {/* Objectives Introduction */}
            <div className="mb-16 text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                The conference is structured around six core strategic objectives designed to forge a comprehensive blueprint for Bharat's transformation and global leadership.
              </p>
            </div>

            {/* Objectives List */}
            <div className="space-y-6 mb-16">
              {conferenceData.objectives.map((objective, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow p-8 md:p-10 border-l-4 border-blue-900 hover:border-yellow-500 hover:border-l-8"
                >
                  <div className="flex gap-6 items-start">
                    {/* Objective Number */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-md">
                        <span className="text-xl md:text-2xl font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Objective Content */}
                    <div className="flex-grow">
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify font-serif">
                        {objective}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Section */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-8 md:p-12 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Unified Vision</h3>
              <p className="text-lg leading-relaxed mb-6">
                These six strategic objectives work in concert to create a unified framework for transforming Bharat into humanity's most developed, self-reliant, and visionary nation by 2047.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-3 items-start">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Century-Long Strategy</h4>
                    <p className="text-blue-100">Comprehensive roadmap spanning 2025–2125</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-3xl">💪</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Decentralized Power</h4>
                    <p className="text-blue-100">District-powered economic architecture</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-3xl">🛡️</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Strategic Security</h4>
                    <p className="text-blue-100">Full-spectrum defense and strategic dominance</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-3xl">🔬</span>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Scientific Sovereignty</h4>
                    <p className="text-blue-100">Indigenous R&D and IPR-driven innovation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Themes Section */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
                Eight Transformative Themes
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {conferenceData.themes.slice(0, 8).map((theme) => (
                  <div
                    key={theme.id}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-t-4 border-blue-900 hover:border-yellow-500"
                  >
                    <div className="text-3xl mb-3">🎯</div>
                    <h4 className="font-bold text-gray-900 leading-snug">
                      {theme.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto italic font-serif">
                Through alignment with these core objectives, the conference creates a transformative platform for reimagining Bharat's role as a global force for innovation, prosperity, and human flourishing.
              </p>
            </div>
          </div>
        </main>

        <Footer />

    </>
  );
}
