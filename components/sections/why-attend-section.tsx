'use client';

import { conferenceData } from '@/lib/conference-data';

export default function WhyAttendSection() {
  const icons = ['🎯', '🤝', '💡', '📚', '🌍', '🚀'];

  return (
    <section id="why-attend" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003D7A] mb-4">Why Should You Attend?</h2>
          <p className="text-xl text-gray-600">Join a historic convergence shaping Bharat's future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conferenceData.whyAttend.map((reason, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 shadow-md hover:shadow-lg transition-all transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{icons[idx]}</div>
              <p className="text-gray-700 leading-relaxed font-medium">{reason}</p>
            </div>
          ))}
        </div>

        {/* Key Statistics */}
        <div className="mt-20 bg-gradient-to-r from-[#003D7A] to-[#004A9E] rounded-lg p-12 text-white">
          <h3 className="text-2xl font-bold mb-12 text-center">Conference at a Glance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">3</div>
              <p className="text-sm opacity-90">Days of Conference</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">8</div>
              <p className="text-sm opacity-90">Major Thematic Tracks</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-sm opacity-90">Partnering Institutions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-sm opacity-90">Expected Participants</p>
            </div>
          </div>
        </div>

        {/* Who Should Attend */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-[#003D7A] mb-8">Who Should Attend?</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Abstract submission is open to all academicians, PhD scholars, students, scientists, researchers, policymakers, public representatives, lawyers, youth leaders, industry pioneers, and every inspired citizen of Bharat. This Shodh-Manthan is the sovereign calling of every Bharatiya who chooses to dream, deliberate, and decide the destiny of the nation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Academicians and Researchers',
              'PhD Scholars and Students',
              'Government Officials',
              'Industry Leaders',
              'Youth and Student Leaders',
              'Scientists and Innovators',
              'Policymakers',
              'Social Workers'
            ].map((category, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                <div className="w-8 h-8 bg-[#FFB81C] rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <span className="text-gray-700 font-medium">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
