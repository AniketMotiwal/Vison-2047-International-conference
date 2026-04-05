'use client';

import { useEffect, useState } from 'react';
import { conferenceData } from '@/lib/conference-data';

type TimelineItem = (typeof conferenceData.timeline)[0];

interface TimelineItemWithStatus extends TimelineItem {
  isCompleted: boolean;
  isActive: boolean;
}

export default function TimelineSection() {
  const [timelineData, setTimelineData] = useState<TimelineItemWithStatus[]>([]);

  useEffect(() => {
    const today = new Date();
    const updatedTimeline = conferenceData.timeline.map((item) => {
      const itemDate = new Date(item.date);
      const isCompleted = today > itemDate;
      const isActive = !isCompleted;

      return {
        ...item,
        isCompleted,
        isActive
      };
    });
    setTimelineData(updatedTimeline);
  }, []);

  return (
    <section id="timeline" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-sm font-bold text-blue-900 uppercase tracking-widest">
              Important Dates
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-blue-900 mb-6 text-balance">
            Conference Timeline
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Key milestones and deadlines for the 2026 conference
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="mb-8 overflow-x-auto pb-6 -mx-4 px-4">
          <div className="relative flex items-start justify-between min-w-max md:min-w-full gap-4 md:gap-6">
            {/* Horizontal connecting line with animation */}
            <div 
              className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-900 via-yellow-400 to-orange-500 animate-flow" 
              style={{ 
                zIndex: 0,
                backgroundSize: '200% 100%'
              }} 
            />
            
            {/* Animated arrows flowing along the line */}
            <div className="absolute top-11 left-0 right-0 flex justify-around pointer-events-none" style={{ zIndex: 1 }}>
              {[0, 1, 2, 3].map((idx) => (
                <div 
                  key={idx}
                  className="text-yellow-400 text-xl font-bold animate-slide-right"
                  style={{ 
                    animationDelay: `${idx * 0.5}s`,
                    opacity: 0.7
                  }}
                >
                  →
                </div>
              ))}
            </div>

            {/* Timeline Items */}
            {timelineData.length > 0 && timelineData.map((item, index) => {
              const isAbove = index % 2 === 0;
              return (
              <div key={index} className="flex-shrink-0 w-56 md:w-full md:flex-1 relative" style={{ zIndex: 1 }}>
                {/* Card spacing - alternating up/down */}
                <div className={`${isAbove ? 'mb-20 md:mb-24' : 'mt-20 md:mt-24'}`}>
                  {/* Timeline dot */}
                  <div className="flex justify-center mb-4">
                    <div className={`relative w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-500 ${
                      item.isCompleted ? 'bg-green-500 scale-110' :
                      item.isActive ? 'bg-blue-900 animate-blink ring-4 ring-blue-900/30' :
                      'bg-yellow-400 animate-blink'
                    }`}>
                      <span className="text-white font-bold text-lg">
                        {item.isCompleted ? '✓' : item.isActive ? '→' : '◯'}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 group overflow-hidden relative ${
                    item.isCompleted 
                      ? 'bg-gradient-to-br from-green-50 to-white border-green-200 hover:-translate-y-2' :
                    item.isActive 
                      ? 'bg-gradient-to-br from-blue-50 to-white border-blue-300 hover:-translate-y-3 shadow-blue-200/50' :
                      'bg-gradient-to-br from-yellow-50 to-white border-yellow-200 hover:-translate-y-2'
                  }`}>
                    {/* Card shine effect animation */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 animate-shimmer -skew-x-12`} style={{
                      animation: 'shimmer 3s infinite'
                    }} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2">
                          <span className={`text-xl transition-colors ${
                            item.isCompleted ? 'text-green-600' :
                            item.isActive ? 'text-blue-600' :
                            'text-yellow-600'
                          }`}>
                            {item.isCompleted ? '✓' : item.isActive ? '→' : '◯'}
                          </span>
                          <h3 className={`text-base md:text-lg font-bold transition-colors ${
                            item.isCompleted ? 'text-green-900' :
                            item.isActive ? 'text-blue-900' :
                            'text-yellow-900'
                          }`}>
                            {item.event}
                          </h3>
                        </div>
                        {item.isActive && (
                          <span className="text-lg flex-shrink-0">👁️</span>
                        )}
                      </div>
                      
                      <p className="text-sm md:text-base font-bold text-yellow-600 mb-3">
                        {item.date}
                      </p>
                      
                      <div className="inline-block">
                        <span className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all transform ${
                          item.isCompleted 
                            ? 'bg-green-200 text-green-900 hover:bg-green-300' :
                          item.isActive 
                            ? 'bg-blue-200 text-blue-900 hover:bg-blue-300' :
                            'bg-yellow-200 text-yellow-900 hover:bg-yellow-300'
                        }`}>
                          {item.isCompleted ? '✓ Done' : item.isActive ? '→ Active' : '◯ Upcoming'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
            })}
          </div>
        </div>

        {/* Registration Fees Section */}
        <div className="mt-16 md:mt-24">
          <div className="mb-8 md:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003D7A] mb-4 text-balance">
              Registration Fees
            </h3>
            <div className="h-1 w-24 bg-gradient-to-r from-[#003D7A] to-[#FFB81C] rounded-full" />
          </div>

          {/* Responsive table wrapper */}
          <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#003D7A] to-[#004A9E] text-white">
                  <th className="px-4 sm:px-6 md:px-8 py-4 text-left font-bold text-sm sm:text-base">
                    Participant Category
                  </th>
                  <th className="px-4 sm:px-6 md:px-8 py-4 text-right font-bold text-sm sm:text-base">
                    Registration Fee
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {conferenceData.registrationFees.map((fee, idx) => (
                  <tr 
                    key={idx} 
                    className={`hover:bg-blue-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                  >
                    <td className="px-4 sm:px-6 md:px-8 py-4 font-semibold text-gray-700 text-sm sm:text-base">
                      {fee.category}
                    </td>
                    <td className="px-4 sm:px-6 md:px-8 py-4 font-bold text-[#FFB81C] text-lg sm:text-xl text-right">
                      {fee.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>
    </section>
  );
}
