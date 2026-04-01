'use client';

import { useState } from 'react';

export default function AssociationUniversitiesSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="association-universities" className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-wider">
            ASSOCIATION OF INDIAN UNIVERSITIES
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto"></div>
        </div>

        {/* PDF Viewer Section */}
        <div className="mt-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg border border-gray-200">
            {/* PDF Header */}
            <div className="bg-gradient-to-r from-blue-600 to-orange-500 px-4 py-3 flex items-center justify-between">
              <h3 className="text-white font-semibold text-sm md:text-base truncate">
                Vision 2047: Prosperous & Great Bharat 2.0 - IIT Roorkee
              </h3>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors"
              >
                {isExpanded ? 'Minimize' : 'Expand'}
              </button>
            </div>

            {/* PDF Embed */}
            <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'h-[50vh] md:h-[80vh]' : 'h-[40vh] md:h-[60vh]'}`}>
              <iframe
                src="/global-institutions/Vision_2047_IIT_Roorkee_10.pdf"
                className="w-full h-full"
                title="Vision 2047 IIT Roorkee PDF"
                style={{ 
                  border: 'none',
                  scrollBehavior: 'smooth'
                }}
                loading="lazy"
                scrolling="yes"
              />
            </div>

            {/* PDF Footer */}
            <div className="bg-gray-50 px-4 py-2 text-xs text-gray-500 flex justify-between items-center border-t border-gray-200">
              <span>📄 Vision 2047: Prosperous & Great Bharat 2.0</span>
              <a
                href="/global-institutions/Vision_2047_IIT_Roorkee_10.pdf"
                download
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
          <p className="text-sm md:text-base text-gray-700 text-center">
            The conference is proudly supported by the Association of Indian Universities with participation from leading institutions across India and the world.
          </p>
        </div>
      </div>
    </section>
  );
}