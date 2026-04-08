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

      return {
        ...item,
        isCompleted,
        isActive: !isCompleted
      };
    });

    setTimelineData(updatedTimeline);
  }, []);

  return (
    <section
      id="timeline"
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 bg-gradient-to-br from-slate-50 to-blue-50"
    >
      <div className="max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-sm font-bold text-blue-900 uppercase tracking-widest">
              Important Dates
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-900 mb-6">
            Conference Timeline
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Key milestones and deadlines for the 2026 conference
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-10 overflow-x-auto lg:overflow-visible pb-6 -mx-4 px-4">
          <div className="relative flex items-start justify-between w-full gap-6 lg:gap-10 xl:gap-14">

            {/* Line */}
            <div className="absolute top-[3.2rem] left-4 right-4 lg:left-0 lg:right-0 h-1 bg-gradient-to-r from-blue-900 via-yellow-400 to-orange-500" />

            {/* Arrows */}
            <div className="absolute top-[2.7rem] left-0 right-0 flex justify-around pointer-events-none">
              {[0, 1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="text-yellow-400 text-xl font-bold animate-pulse"
                  style={{ animationDelay: `${idx * 0.4}s` }}
                >
                  →
                </div>
              ))}
            </div>

            {/* Items */}
            {timelineData.map((item, index) => {
              const isAbove = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="flex-1 min-w-[220px] max-w-[320px] mx-auto relative"
                >
                  <div
                    className={`${
                      isAbove
                        ? 'mb-16 sm:mb-20 lg:mb-28'
                        : 'mt-16 sm:mt-20 lg:mt-28'
                    }`}
                  >
                    {/* Dot */}
                    <div className="flex justify-center mb-4">
                      <div
                        className={`w-12 h-12 rounded-full border-4 border-white shadow-lg flex items-center justify-center transition-all duration-500
                        ${
                          item.isCompleted
                            ? 'bg-green-500'
                            : item.isActive
                            ? 'bg-blue-900 animate-pulse'
                            : 'bg-yellow-400'
                        }`}
                      >
                        <span className="text-white font-bold">
                          {item.isCompleted ? '✓' : item.isActive ? '→' : '◯'}
                        </span>
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={`rounded-xl p-6 md:p-8 xl:p-10 shadow-lg transition-all duration-300 border-2 hover:-translate-y-2
                      ${
                        item.isCompleted
                          ? 'bg-green-50 border-green-200'
                          : item.isActive
                          ? 'bg-blue-50 border-blue-300'
                          : 'bg-yellow-50 border-yellow-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3
                          className={`text-base md:text-lg font-bold
                          ${
                            item.isCompleted
                              ? 'text-green-900'
                              : item.isActive
                              ? 'text-blue-900'
                              : 'text-yellow-900'
                          }`}
                        >
                          {item.event}
                        </h3>

                        {item.isActive && <span>👁️</span>}
                      </div>

                      <p className="text-sm md:text-base font-bold text-yellow-600 mb-3">
                        {item.date}
                      </p>

                      <span
                        className={`text-xs font-bold px-4 py-2 rounded-lg
                        ${
                          item.isCompleted
                            ? 'bg-green-200 text-green-900'
                            : item.isActive
                            ? 'bg-blue-200 text-blue-900'
                            : 'bg-yellow-200 text-yellow-900'
                        }`}
                      >
                        {item.isCompleted
                          ? '✓ Done'
                          : item.isActive
                          ? '→ Active'
                          : '◯ Upcoming'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Fees */}
        <div className="mt-20">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#003D7A] mb-4">
            Registration Fees
          </h3>

          <div className="h-1 w-24 bg-gradient-to-r from-[#003D7A] to-[#FFB81C] mb-8 rounded-full" />

          <div className="overflow-x-auto rounded-xl shadow border">
            <table className="w-full">
              <thead>
                <tr className="bg-[#003D7A] text-white">
                  <th className="px-6 py-4 text-left">Category</th>
                  <th className="px-6 py-4 text-right">Fee</th>
                </tr>
              </thead>

              <tbody>
                {conferenceData.registrationFees.map((fee, idx) => (
                  <tr key={idx} className="border-t hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold">
                      {fee.category}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-[#FFB81C]">
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