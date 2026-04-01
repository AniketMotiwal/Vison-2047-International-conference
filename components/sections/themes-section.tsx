'use client';

import { conferenceData } from '@/lib/conference-data';
import { useState } from 'react';

export default function ThemesSection() {
  const [expandedTheme, setExpandedTheme] = useState<number | null>(null);

  return (
    <section id="themes" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003D7A] mb-4">Eight Transformative Themes</h2>
          <p className="text-xl text-gray-600">A civilizational masterplan for Bharat 2047</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conferenceData.themes.map((theme) => (
            <div
              key={theme.id}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden"
              onClick={() => setExpandedTheme(expandedTheme === theme.id ? null : theme.id)}
            >
              <div className="bg-gradient-to-r from-[#003D7A] to-[#004A9E] p-6 text-white">
                <div className="text-4xl font-bold mb-2 opacity-20">{String(theme.id).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold leading-tight">{theme.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-700 mb-4 font-medium">{theme.description}</p>

                {expandedTheme === theme.id && (
                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <p className="text-xs font-semibold text-[#003D7A] mb-2 uppercase">Key Areas</p>
                    <ul className="space-y-2">
                      {theme.subtopics.map((subtopic, idx) => (
                        <li key={idx} className="text-xs text-gray-700 flex gap-2">
                          <span className="text-[#FFB81C]">✓</span>
                          <span>{subtopic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-4 flex items-center gap-2 text-[#003D7A] font-semibold text-sm">
                  <span>{expandedTheme === theme.id ? 'Show Less' : 'Learn More'}</span>
                  <span className="text-lg">{expandedTheme === theme.id ? '−' : '+'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Theme Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-[#003D7A] to-[#004A9E] rounded-lg p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">8</div>
            <p className="text-sm">Transformative Themes</p>
          </div>
          <div className="bg-gradient-to-br from-[#FFB81C] to-[#E6A80C] rounded-lg p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">40+</div>
            <p className="text-sm">Research Areas</p>
          </div>
          <div className="bg-gradient-to-br from-[#D97706] to-[#B45309] rounded-lg p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">100+</div>
            <p className="text-sm">Partner Institutions</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">2025</div>
            <p className="text-sm">Vision Timeline Begins</p>
          </div>
        </div>
      </div>
    </section>
  );
}
