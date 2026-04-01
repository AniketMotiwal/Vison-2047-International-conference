'use client';

import { conferenceData } from '@/lib/conference-data';

export default function TimelineSection() {
  return (
    <section id="timeline" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003D7A] mb-4">Conference Timeline</h2>
          <p className="text-xl text-gray-600">Important dates and deadlines</p>
        </div>

        {/* Timeline Vertical */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#003D7A] via-[#FFB81C] to-[#D97706] md:transform md:translate-x-0" />

          {/* Timeline Items */}
          <div className="space-y-8 relative">
            {conferenceData.timeline.map((item, index) => (
              <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Left Content for mobile, Right for md+ */}
                <div className="flex-1 ml-12 md:ml-0 md:text-right md:px-8">
                  <div className="bg-white rounded-lg shadow-md p-6 border-l-4 md:border-l-0 md:border-r-4 border-[#FFB81C]">
                    <h3 className="text-xl font-bold text-[#003D7A] mb-2">{item.event}</h3>
                    <p className="text-lg font-semibold text-[#FFB81C]">{item.date}</p>
                    <div className="mt-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        item.status === 'open' ? 'bg-green-100 text-green-700' :
                        item.status === 'active' ? 'bg-blue-100 text-blue-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>
                        {item.status === 'open' ? '✓ Open' : item.status === 'active' ? '→ Active' : 'Upcoming'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-white border-4 border-[#FFB81C] rounded-full md:transform md:-translate-x-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Registration Fees Table */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-[#003D7A] mb-8">Registration Fees</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#003D7A] to-[#004A9E] text-white">
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold">Category</th>
                  <th className="border border-gray-300 px-6 py-4 text-left font-bold">Registration Fee</th>
                </tr>
              </thead>
              <tbody>
                {conferenceData.registrationFees.map((fee, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-6 py-4 font-semibold text-gray-700">{fee.category}</td>
                    <td className="border border-gray-300 px-6 py-4 font-bold text-[#FFB81C] text-lg">{fee.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-12 bg-blue-50 border-l-4 border-[#003D7A] rounded p-6">
          <h4 className="text-lg font-bold text-[#003D7A] mb-4">Important Notes</h4>
          <ul className="space-y-3">
            {conferenceData.notes.map((note, idx) => (
              <li key={idx} className="text-gray-700 flex gap-3">
                <span className="text-[#FFB81C] font-bold">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
