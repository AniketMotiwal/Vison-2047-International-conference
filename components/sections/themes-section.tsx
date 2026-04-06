'use client';

import { conferenceData } from '@/lib/conference-data';

export default function ThemesSection() {
  return (
    <section id="themes" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003D7A] mb-4">Conference Themes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conferenceData.themes.map((theme) => (
            <div
              key={theme.id}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="bg-gradient-to-r from-[#003D7A] to-[#004A9E] p-6 text-white">
                <div className="text-4xl font-bold mb-2 opacity-20">{String(theme.id).padStart(2, '0')}</div>
                <h3 className="text-lg font-bold leading-tight">{theme.title}</h3>
              </div>

              <div className="p-4">
                <p className="text-xs text-gray-600 text-center">Theme {theme.id}</p>
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
